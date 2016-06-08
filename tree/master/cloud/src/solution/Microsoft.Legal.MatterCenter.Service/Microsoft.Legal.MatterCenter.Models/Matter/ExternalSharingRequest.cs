﻿

using System.Collections.Generic;

namespace Microsoft.Legal.MatterCenter.Models
{
    /// <summary>
    /// Provides the structure required to hold external sharing information. It includes the person name with whom the information 
    /// is getting share, his role, his permission etc.
    /// </summary>
    public class ExternalSharingRequest
    {
        public Client Client { get; set; }
        public string MatterId { get; set; }        
        public string ClientName { get; set; }
        public List<ExternalUserInfo> ExternalUserInfoList { get; set; }
    }

    public class ExternalUserInfo
    {
        public string Person { get; set; }
        public string Role { get; set; }
        public string Permission { get; set; }
        public string Status { get; set; }
    }

    
}
