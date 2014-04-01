using Nancy;

namespace NancyTest.services
{
    public class NancyService : NancyModule
    {
        public NancyService() : base("/services")
        {
            Get["/"] = x => GetNancyType();
        }
        private Response GetNancyType()
        {
            return Response.AsJson("type:" + "123");
        }
    }
}