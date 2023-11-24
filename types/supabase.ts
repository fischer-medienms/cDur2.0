export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      captions: {
        Row: {
          caption: string | null
          created_at: string
          id: number
          tags: string | null
          user_id: string | null
        }
        Insert: {
          caption?: string | null
          created_at?: string
          id?: number
          tags?: string | null
          user_id?: string | null
        }
        Update: {
          caption?: string | null
          created_at?: string
          id?: number
          tags?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "captions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      tags: {
        Row: {
          created_at: string | null
          id: number
          name: string | null
          tags: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name?: string | null
          tags: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string | null
          tags?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tags_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
