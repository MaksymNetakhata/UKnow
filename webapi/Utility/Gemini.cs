using GenerativeAI.Models;
using GenerativeAI;
using GenerativeAI.Services.Classes;

namespace webapi.Utility
{
    public class Gemini
    {
        public async Task<string> GetResponse()
        {
            var apiKey = "AIzaSyAOnpmWDWwvChYfidOmlTNaODDYC2NSZsI";

            var model = new GenerativeModel(apiKey);
            //or var model = new GeminiProModel(apiKey)

            var res = await model.GenerateContentAsync("How are you doing?");

            return res;
        }
        
        
    }
}
