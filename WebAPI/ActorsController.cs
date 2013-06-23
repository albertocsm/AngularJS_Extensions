using AngularJS_1.LOB.Actors;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace AngularJS_1.Controllers
{
    public class ActorsController : ApiController
    {
        #region DTO
        public class ActorRequest
        {
            public int id;
            public int pageIndex;
            public int pageSize;
            public string searchText;
        }
        #endregion

        [HttpPost]
        public object List(ActorRequest request)
        {
            return ActorManager.ListActors(request.pageIndex, request.pageSize, request.searchText);
        }

        [HttpPost]
        public object Get(ActorRequest request)
        {
            return ActorManager.GetActor(request.id);
        }
    }

}