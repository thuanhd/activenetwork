//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ActiveNetwork.Entities
{
    using System;
    using System.Collections.Generic;
    
    public partial class ANEventInformation
    {
        public int Id { get; set; }
        public Nullable<int> ANEventId { get; set; }
    
        public virtual ANEvent ANEvent { get; set; }
    }
}
