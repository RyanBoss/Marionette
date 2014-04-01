using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NancyTest
{
    public static class UrlHelperExtensionMethods
    {
        public static string Script(this UrlHelper helper, string path, bool cache = false)
        {
            if (HttpContext.Current.Request.IsLocal)
                cache = true;
            var scriptPath = helper.Content(path);
            if (!cache)
            {
                scriptPath += "?_=" + DateTime.Now.Ticks;
            }
            return scriptPath;
        }
    }
}