// var _api = SimphonyExtensibilityAPI;
// var _opsContext = _api.Environment.Context;
// var _ops = _api.Common.LoadOps();

////To Trigger via Button Click
globalThis.test = function() {
    const context = SimphonyExtensibilityAPI.Environment.Context;
    context.ShowMessage('OpsBeginCheckEvent triggered!');
};


//////////////Get Request using a sample opensource api////////////////////////////////////////////////////////////

// var _api = SimphonyExtensibilityAPI; 
// var _opsContext = _api.Environment.Context; 
// var _http = _api.Common.LoadCommonNetAsssembles('System.Net.Http'); 
 
// globalThis.test = function() { 
//     var url = 'https://jsonplaceholder.typicode.com/posts'; 
//     try { 
//         var httpClient = new _http.System.Net.Http.HttpClient(); 
//         var response = httpClient.GetAsync(url).Result;
//         var postsData = response.Content.ReadAsStringAsync().Result;
//         _opsContext.ShowMessage(postsData);
//     } catch (ex) { 
//         _opsContext.ShowMessage("Error fetching posts data: " + ex.message); 
//     } 
// };

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////Code To get all property under EnvContext//////////////////////////////////////////////////////////////// 

// var _api = SimphonyExtensibilityAPI; 
// var _opsContext = _api.Environment.Context; 
// var _net = _api.Common.LoadCommonNetAsssembles('System.Core'); 
 
// globalThis.test = function test() { 
//     try { 
//         var properties = Object.getOwnPropertyNames(_opsContext); 
//         var message = "Properties of _opsContext (Environment.Context):\n"; 
 
//         properties.forEach(function(property) { 
//             message += property + ": " + _opsContext[property] + "\n"; 
//         }); 
//          _opsContext.ShowMessage(message); 
//     } catch (ex) { 
//         _opsContext.ShowMessage('Error: ' + ex.message); 
//     } 
// };
