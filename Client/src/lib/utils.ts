import type { Session, User } from '@supabase/supabase-js';

export const userColor = (role: string) => {
	if (role === 'admin') return 'stroke-warning';
	if (role === 'super') return 'stroke-accent';
	return '';
};

export const isAdmin = (role: string) => {
	if (['admin', 'super'].includes(role)) return true;
	else return false;
};

export const isSuper = (role: string) => {
	if (['super'].includes(role)) return true;
	else return false;
};

export const orgIdToName = (orgs: any, id: number) => {
	const result = orgs.find((e) => e.id == id);
	return result.name;
};

export const myUser = (session: Session | null) => {
	return session?.user ?? null;
};

export const myOrg = (session: Session | null) => {
	return session?.user.app_metadata.org ?? null;
};

export const myRole = (session: Session | null) => {
	return session?.user.app_metadata.role ?? 'user';
};

export const imSuper = (user: User | null | undefined) => {
	if (['super'].includes(user?.app_metadata.role)) return true;
	else return false;
};

export const imAdmin = (user: User | null | undefined) => {
	if (['super', 'admin'].includes(user.app_metadata.role)) return true;
	else return false;
};

export const roleSuper = (session: any) => {
	if (['super'].includes(session.user.app_metadata.role)) return true;
	else return false;
};

export const roleAdmin = (session: any) => {
	if (['super', 'admin'].includes(session.user.app_metadata.role)) return true;
	else return false;
};

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
      orgs: {
        Row: {
          created_at: string
          id: number
          logo: string | null
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          logo?: string | null
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          logo?: string | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      VCRM: {
        Row: {
          "Compliance Comment": string | null
          "Compliance Status": string | null
          "Design Package": string | null
          "Discipline Old": string | null
          Disciplines: string | null
          "EVA ID": string | null
          "Evidence Section": string | null
          "Implementation Items": string | null
          "Integration Level": string | null
          "Lifecycle Phase": string | null
          Location: string | null
          Method: string | null
          "Method Description": string | null
          "MVA Completion": string | null
          "MVA ID": number | null
          Note: string | null
          Notes: string | null
          "Package ID": string | null
          "Package Name": string | null
          "Ref Section": string | null
          "Ref Source": string | null
          REF_SECTION_NUMBER: string | null
          REF_SECTION_TEXT: string | null
          "Report Reference": string | null
          Requirement: string | null
          "RPV ID": string | null
          "SBS Elements": string | null
          SID: string | null
          "TAS ID": number | null
          TasConplete: string | null
          TASunique: string | null
          "Unique Check": string | null
        }
        Insert: {
          "Compliance Comment"?: string | null
          "Compliance Status"?: string | null
          "Design Package"?: string | null
          "Discipline Old"?: string | null
          Disciplines?: string | null
          "EVA ID"?: string | null
          "Evidence Section"?: string | null
          "Implementation Items"?: string | null
          "Integration Level"?: string | null
          "Lifecycle Phase"?: string | null
          Location?: string | null
          Method?: string | null
          "Method Description"?: string | null
          "MVA Completion"?: string | null
          "MVA ID"?: number | null
          Note?: string | null
          Notes?: string | null
          "Package ID"?: string | null
          "Package Name"?: string | null
          "Ref Section"?: string | null
          "Ref Source"?: string | null
          REF_SECTION_NUMBER?: string | null
          REF_SECTION_TEXT?: string | null
          "Report Reference"?: string | null
          Requirement?: string | null
          "RPV ID"?: string | null
          "SBS Elements"?: string | null
          SID?: string | null
          "TAS ID"?: number | null
          TasConplete?: string | null
          TASunique?: string | null
          "Unique Check"?: string | null
        }
        Update: {
          "Compliance Comment"?: string | null
          "Compliance Status"?: string | null
          "Design Package"?: string | null
          "Discipline Old"?: string | null
          Disciplines?: string | null
          "EVA ID"?: string | null
          "Evidence Section"?: string | null
          "Implementation Items"?: string | null
          "Integration Level"?: string | null
          "Lifecycle Phase"?: string | null
          Location?: string | null
          Method?: string | null
          "Method Description"?: string | null
          "MVA Completion"?: string | null
          "MVA ID"?: number | null
          Note?: string | null
          Notes?: string | null
          "Package ID"?: string | null
          "Package Name"?: string | null
          "Ref Section"?: string | null
          "Ref Source"?: string | null
          REF_SECTION_NUMBER?: string | null
          REF_SECTION_TEXT?: string | null
          "Report Reference"?: string | null
          Requirement?: string | null
          "RPV ID"?: string | null
          "SBS Elements"?: string | null
          SID?: string | null
          "TAS ID"?: number | null
          TasConplete?: string | null
          TASunique?: string | null
          "Unique Check"?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      delete_claim: {
        Args: {
          uid: string
          claim: string
        }
        Returns: string
      }
      get_claim: {
        Args: {
          uid: string
          claim: string
        }
        Returns: Json
      }
      get_claims: {
        Args: {
          uid: string
        }
        Returns: Json
      }
      get_my_claim: {
        Args: {
          claim: string
        }
        Returns: Json
      }
      get_my_claims: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      is_claims_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      log: {
        Args: {
          message: string
        }
        Returns: undefined
      }
      set_claim: {
        Args: {
          uid: string
          claim: string
          value: Json
        }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
