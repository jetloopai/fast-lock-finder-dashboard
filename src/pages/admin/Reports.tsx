import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, BarChart3 } from "lucide-react";

interface JobRow {
  id: string;
  final_price: number | null;
  your_cut: number | null;
  their_cut: number | null;
  completed_at: string | null;
  locksmiths: { id: string; name: string } | null;
}

interface TechReport {
  locksmiths: string;
  locksmiths_name: string;
  jobs: number;
  revenue: number;
  company_cut: number;
  tech_pay: number;
}

const today = new Date().toISOString().split('T')[0];

export default function Reports() {
  const [startDate, setStartDate] = useState(today);
  const [endDate,   setEndDate]   = useState(today);
  const [rows,      setRows]      = useState<TechReport[]>([]);
  const [loading,   setLoading]   = useState(false);

  const fetchReport = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('jobs')
      .select('id, final_price, your_cut, their_cut, completed_at, locksmiths(id, name)')
      .in('status', ['complete', 'completed'])
      .gte('completed_at', `${startDate}T00:00:00`)
      .lte('completed_at', `${endDate}T23:59:59`)
      .order('completed_at', { ascending: false });

    if (!error && data) {
      const grouped: Record<string, TechReport> = {};
      (data as unknown as JobRow[]).forEach((job) => {
        const id   = job.locksmiths?.id   ?? 'unassigned';
        const name = job.locksmiths?.name ?? 'Unassigned';
        if (!grouped[id]) {
          grouped[id] = { locksmiths: id, locksmiths_name: name, jobs: 0, revenue: 0, company_cut: 0, tech_pay: 0 };
        }
        grouped[id].jobs        += 1;
        grouped[id].revenue     += job.final_price   ?? 0;
        grouped[id].company_cut += job.your_cut      ?? 0;
        grouped[id].tech_pay    += job.their_cut     ?? 0;
      });
      setRows(Object.values(grouped).sort((a, b) => b.revenue - a.revenue));
    }
    setLoading(false);
  }, [startDate, endDate]);

  useEffect(() => { fetchReport(); }, [fetchReport]);

  const totals = rows.reduce(
    (acc, r) => ({ jobs: acc.jobs + r.jobs, revenue: acc.revenue + r.revenue, company_cut: acc.company_cut + r.company_cut, tech_pay: acc.tech_pay + r.tech_pay }),
    { jobs: 0, revenue: 0, company_cut: 0, tech_pay: 0 }
  );

  const fmt = (n: number) => `$${n.toFixed(2)}`;

  const exportCSV = () => {
    const header = 'Technician,Jobs,Revenue,Company Cut (60%),Tech Pay (40%)\n';
    const body   = rows.map(r =>
      `${r.locksmiths_name},${r.jobs},${r.revenue.toFixed(2)},${r.company_cut.toFixed(2)},${r.tech_pay.toFixed(2)}`
    ).join('\n');
    const total  = `TOTAL,${totals.jobs},${totals.revenue.toFixed(2)},${totals.company_cut.toFixed(2)},${totals.tech_pay.toFixed(2)}`;
    const blob   = new Blob([header + body + '\n' + total], { type: 'text/csv' });
    const url    = URL.createObjectURL(blob);
    const a      = document.createElement('a');
    a.href       = url;
    a.download   = `report-${startDate}-to-${endDate}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Pay Reports</h1>
          <p className="text-muted-foreground">Daily breakdown by technician</p>
        </div>
        <Button variant="outline" onClick={exportCSV} disabled={rows.length === 0}>
          <Download className="w-4 h-4 mr-2" /> Export CSV
        </Button>
      </div>

      {/* Date range */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-4 items-end">
            <div className="space-y-1">
              <Label>From</Label>
              <Input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label>To</Label>
              <Input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
            </div>
            <Button onClick={fetchReport}>Apply</Button>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" /> Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
            </div>
          ) : rows.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">No completed jobs in this date range.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left">
                    <th className="pb-3 font-medium">Technician</th>
                    <th className="pb-3 font-medium text-right">Jobs</th>
                    <th className="pb-3 font-medium text-right">Revenue</th>
                    <th className="pb-3 font-medium text-right">Company (60%)</th>
                    <th className="pb-3 font-medium text-right">Tech (40%)</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(r => (
                    <tr key={r.locksmiths} className="border-b hover:bg-muted/30">
                      <td className="py-3">{r.locksmiths_name}</td>
                      <td className="py-3 text-right">{r.jobs}</td>
                      <td className="py-3 text-right">{fmt(r.revenue)}</td>
                      <td className="py-3 text-right text-blue-600">{fmt(r.company_cut)}</td>
                      <td className="py-3 text-right text-green-600">{fmt(r.tech_pay)}</td>
                    </tr>
                  ))}
                  <tr className="font-bold bg-muted/50">
                    <td className="py-3">TOTAL</td>
                    <td className="py-3 text-right">{totals.jobs}</td>
                    <td className="py-3 text-right">{fmt(totals.revenue)}</td>
                    <td className="py-3 text-right text-blue-600">{fmt(totals.company_cut)}</td>
                    <td className="py-3 text-right text-green-600">{fmt(totals.tech_pay)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
