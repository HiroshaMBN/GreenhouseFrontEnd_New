<template>
  <div>
    <input v-model="command" placeholder="Enter command (e.g., ls)" />
    <button @click="runCommand">Run</button>
    <pre style="color: red;">{{ output }}</pre>
  </div>
</template>

<script>
import axios from "axios";
let token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5ZTkyNmE3Yi0yMTQ2LTQ3NmYtYTIyNy1jNjA0Y2RhYjUzMDgiLCJqdGkiOiI3YTdlOTcwMWEwYzE5ZDJkNzVkZjNhZGU2NTg4NDRjZWE3NzJmMWQwNmVmODVkYzQ1OTAzODAzNWQ4YjdlMjk4ODg4NWZjMjk0MzU2MTIxOCIsImlhdCI6MTc0MzUxNzE4Mi44NzEwNDEsIm5iZiI6MTc0MzUxNzE4Mi44NzEwNDksImV4cCI6MTc0NjEwOTE4Mi44NTc0NCwic3ViIjoiOCIsInNjb3BlcyI6WyJyZWFkLXByb2ZpbGUiXX0.BJRSYB9wIQz1GW2vvTaUX5LILWdLKFI5Z4kJxd4mc3VQQAzVDgUehwE9yoN7bzvGbMG3AY_xLkJNVpDb2ckqwmh1JG0A_tz97eaLt9eaStSRFmWU6JuJFMLM-4E0HZmkUQQpooEj7mFBkCVNZVuJ8466u5R-cI528y6SuGtX4_7bGwmZv0GAPKB5miClHxNZL3XG1Q7MU7UlGMmy17_WPYqc1gkyVm1U5BeKPes37xiugzLAXnpuip5eWShelUOcg5sk8nsA-i4yKrCQpSdcIIEU5eoiEgdiVW0e08VgZD2KpWeptHsBejqwcW1NRDovn1eD8ZDeZRthedL6QFN-PP9RmTNR26QFBrHhFKl6R9DOkd8wumBcOzjCOKspGUUIdKc8XJrL5q-miyXFY_8n09IR9fdi2rZbo9j-sOQGHWxDkBIwpkI-meTkYHiYNzhhKcSI_UBCGYXFy__qj01sLdEnuXqF48-7klJkF_fc5-PgY9DjOo501AtDo4irU18g5eRs0suxsmgjAKKMXXhum-6yZpdiXe8n1Rh6LPX4h6Uv5eMBCDO-HRdI1VzAb392TnjmDPqDL_nxP4TrJBXOn_MIITXqNocsiqEgmcYeVgZGcN3tjfn1hkeHntMitbXGmDlSJgaVIjPtgyBRICG-E1wiJZwmVspJWnH-BJ05I64";

export default {
  data() {
    return {
      command: "",
      output: "",
    };
  },
  methods: {
    async runCommand() {
      try {
        const response = await axios.get(`http://10.128.1.52:8000/api/auth/terminal?cmd=${this.command}`,
        {
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
          }
        });
        this.output = response.data.output;
      } catch (error) {
        this.output = "Error: " + (error.response?.data?.error || error.message);
      }
    },
  },
};
</script>
