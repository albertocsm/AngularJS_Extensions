using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularJS_1.LOB.Actors
{
    public class ActorCollection
    {
        public IEnumerable<Actor> Actors { get; set; }
        public int TotalRowCount { get; set; }
    }

}