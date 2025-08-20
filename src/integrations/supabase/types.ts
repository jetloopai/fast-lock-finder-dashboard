export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      call_logs: {
        Row: {
          client_phone: string | null
          created_at: string | null
          duration_seconds: number | null
          end_time: string | null
          id: string
          job_id: string | null
          locksmith_id: string | null
          recording_url: string | null
          start_time: string | null
          status: Database["public"]["Enums"]["call_status"] | null
        }
        Insert: {
          client_phone?: string | null
          created_at?: string | null
          duration_seconds?: number | null
          end_time?: string | null
          id?: string
          job_id?: string | null
          locksmith_id?: string | null
          recording_url?: string | null
          start_time?: string | null
          status?: Database["public"]["Enums"]["call_status"] | null
        }
        Update: {
          client_phone?: string | null
          created_at?: string | null
          duration_seconds?: number | null
          end_time?: string | null
          id?: string
          job_id?: string | null
          locksmith_id?: string | null
          recording_url?: string | null
          start_time?: string | null
          status?: Database["public"]["Enums"]["call_status"] | null
        }
        Relationships: [
          {
            foreignKeyName: "call_logs_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "call_logs_locksmith_id_fkey"
            columns: ["locksmith_id"]
            isOneToOne: false
            referencedRelation: "locksmiths"
            referencedColumns: ["id"]
          },
        ]
      }
      dispatch_codes: {
        Row: {
          code: string
          created_at: string | null
          expiration_time: string | null
          id: string
          lead_id: string | null
          locksmith_id: string | null
          status: Database["public"]["Enums"]["code_status"] | null
        }
        Insert: {
          code: string
          created_at?: string | null
          expiration_time?: string | null
          id?: string
          lead_id?: string | null
          locksmith_id?: string | null
          status?: Database["public"]["Enums"]["code_status"] | null
        }
        Update: {
          code?: string
          created_at?: string | null
          expiration_time?: string | null
          id?: string
          lead_id?: string | null
          locksmith_id?: string | null
          status?: Database["public"]["Enums"]["code_status"] | null
        }
        Relationships: [
          {
            foreignKeyName: "dispatch_codes_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dispatch_codes_locksmith_id_fkey"
            columns: ["locksmith_id"]
            isOneToOne: false
            referencedRelation: "locksmiths"
            referencedColumns: ["id"]
          },
        ]
      }
      jobs: {
        Row: {
          client_name: string | null
          completed_at: string | null
          created_at: string | null
          final_price: number | null
          id: string
          job_type: string | null
          lead_id: string | null
          locksmith_id: string | null
          status: Database["public"]["Enums"]["job_status"] | null
          their_cut: number | null
          your_cut: number | null
        }
        Insert: {
          client_name?: string | null
          completed_at?: string | null
          created_at?: string | null
          final_price?: number | null
          id?: string
          job_type?: string | null
          lead_id?: string | null
          locksmith_id?: string | null
          status?: Database["public"]["Enums"]["job_status"] | null
          their_cut?: number | null
          your_cut?: number | null
        }
        Update: {
          client_name?: string | null
          completed_at?: string | null
          created_at?: string | null
          final_price?: number | null
          id?: string
          job_type?: string | null
          lead_id?: string | null
          locksmith_id?: string | null
          status?: Database["public"]["Enums"]["job_status"] | null
          their_cut?: number | null
          your_cut?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "jobs_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "jobs_locksmith_id_fkey"
            columns: ["locksmith_id"]
            isOneToOne: false
            referencedRelation: "locksmiths"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          assigned_locksmith_id: string | null
          created_at: string | null
          dispatch_code_id: string | null
          id: string
          name: string | null
          phone: string
          service_type: string | null
          status: Database["public"]["Enums"]["lead_status"] | null
          zip: string | null
        }
        Insert: {
          assigned_locksmith_id?: string | null
          created_at?: string | null
          dispatch_code_id?: string | null
          id?: string
          name?: string | null
          phone: string
          service_type?: string | null
          status?: Database["public"]["Enums"]["lead_status"] | null
          zip?: string | null
        }
        Update: {
          assigned_locksmith_id?: string | null
          created_at?: string | null
          dispatch_code_id?: string | null
          id?: string
          name?: string | null
          phone?: string
          service_type?: string | null
          status?: Database["public"]["Enums"]["lead_status"] | null
          zip?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_assigned_locksmith_id_fkey"
            columns: ["assigned_locksmith_id"]
            isOneToOne: false
            referencedRelation: "locksmiths"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_dispatch_code_fk"
            columns: ["dispatch_code_id"]
            isOneToOne: false
            referencedRelation: "dispatch_codes"
            referencedColumns: ["id"]
          },
        ]
      }
      locksmiths: {
        Row: {
          active: boolean | null
          assigned_zips: string[] | null
          created_at: string | null
          default_cut_percent: number | null
          email: string | null
          id: string
          name: string
          payment_method: string | null
          phone: string
        }
        Insert: {
          active?: boolean | null
          assigned_zips?: string[] | null
          created_at?: string | null
          default_cut_percent?: number | null
          email?: string | null
          id?: string
          name: string
          payment_method?: string | null
          phone: string
        }
        Update: {
          active?: boolean | null
          assigned_zips?: string[] | null
          created_at?: string | null
          default_cut_percent?: number | null
          email?: string | null
          id?: string
          name?: string
          payment_method?: string | null
          phone?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      call_status: "answered" | "missed" | "failed"
      code_status: "new" | "in_progress" | "complete" | "expired"
      job_status: "in_progress" | "complete" | "missed"
      lead_status: "new" | "in_progress" | "complete" | "missed"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      call_status: ["answered", "missed", "failed"],
      code_status: ["new", "in_progress", "complete", "expired"],
      job_status: ["in_progress", "complete", "missed"],
      lead_status: ["new", "in_progress", "complete", "missed"],
    },
  },
} as const
