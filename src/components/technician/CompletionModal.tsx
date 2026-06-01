import { useState } from "react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CompletionModalProps {
  open: boolean;
  jobId: string;
  techCutPercent: number;
  onConfirm: (jobId: string, finalPrice: number) => Promise<void>;
  onClose: () => void;
}

export default function CompletionModal({ open, jobId, techCutPercent, onConfirm, onClose }: CompletionModalProps) {
  const [price,   setPrice]   = useState('');
  const [saving,  setSaving]  = useState(false);

  const numPrice    = parseFloat(price) || 0;
  const techPay     = numPrice * (techCutPercent / 100);
  const companyCut  = numPrice - techPay;

  const handleSave = async () => {
    if (!numPrice || numPrice <= 0) return;
    setSaving(true);
    await onConfirm(jobId, numPrice);
    setSaving(false);
    setPrice('');
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={open => !open && onClose()}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Complete Job</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-2">
          <div className="space-y-1">
            <Label>Final Price Charged to Customer</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                type="number"
                min="0"
                step="0.01"
                className="pl-7"
                placeholder="0.00"
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </div>
          </div>

          {numPrice > 0 && (
            <div className="rounded-lg bg-muted p-3 space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Your cut ({techCutPercent}%)</span>
                <span className="font-semibold text-green-600">${techPay.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Company ({100 - techCutPercent}%)</span>
                <span className="font-medium">${companyCut.toFixed(2)}</span>
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={onClose}>Cancel</Button>
            <Button className="flex-1" onClick={handleSave} disabled={saving || numPrice <= 0}>
              {saving ? 'Saving...' : 'Save & Complete'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
