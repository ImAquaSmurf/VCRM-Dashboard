import { supabaseAdminClient as supabaseClient } from '$lib/server/supabase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
 
  

  const vcrm = await supabaseClient.from('VCRM').select('*');
		if (vcrm.data) {
			return { vcrm: vcrm.data };
		}
};

