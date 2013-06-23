using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace AngularJS_1.LOB.Actors
{
    public static class ActorManager
    {
        public static object ListActors(int pageIndex, int pageSize, string searchText)
        {
            ActorCollection result = new ActorCollection();

            string path = Path.Combine(AppDomain.CurrentDomain.GetData("DataDirectory").ToString(), "actors.json");
            string allText = System.IO.File.ReadAllText(path);
            int skip = (pageIndex - 1) * pageSize;

            result.Actors = JsonConvert.DeserializeObject<List<Actor>>(allText).Where(e => string.IsNullOrEmpty(searchText) || e.name.ToLower().Contains(searchText.ToLower()));
            result.TotalRowCount = result.Actors.Count();


            return new
            {
                Collection = result.Actors.Skip(skip).Take(pageSize),
                TotalRows = result.TotalRowCount
            };
        }

        public static Actor GetActor(int id)
        {            
            string path = Path.Combine(AppDomain.CurrentDomain.GetData("DataDirectory").ToString(), "actors.json");
            string allText = System.IO.File.ReadAllText(path);            

            return JsonConvert.DeserializeObject<List<Actor>>(allText).FirstOrDefault(e => e.id == id);                        
        }
    }
}
