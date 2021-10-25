"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[302],{61802:function(n){n.exports=JSON.parse('{"functions":[{"name":"new","desc":"Creates a ScriptSignal object","params":[],"returns":[{"desc":"","lua_type":"ScriptSignal"}],"function_type":"static","ignore":true,"source":{"line":28,"path":"src/ReplicatedStorage/FastSignal/Deferred.lua"}},{"name":"Is","desc":"Returns a boolean determining if the object is a ScriptSignal\\n\\n```lua\\nlocal janitor = Janitor.new()\\nlocal signal = ScriptSignal.new()\\n\\nScriptSignal.Is(signal) -> true\\nScriptSignal.Is(janitor) -> false\\n```","params":[{"name":"object","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","ignore":true,"source":{"line":50,"path":"src/ReplicatedStorage/FastSignal/Deferred.lua"}},{"name":"IsActive","desc":"Returns a boolean determing if a ScriptSignal object is active\\n\\n```lua\\nScriptSignal:IsActive() -> true\\nScriptSignal:Destroy()\\nScriptSignal:IsActive() -> false\\n```","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","ignore":true,"source":{"line":67,"path":"src/ReplicatedStorage/FastSignal/Deferred.lua"}},{"name":"Connect","desc":"Connects a function to the ScriptSignal\\n\\n```lua\\nScriptSignal:Connect(function(text)\\n\\tprint(text)\\nend)\\n\\nScriptSignal:Fire(\\"Something\\")\\nScriptSignal:Fire(\\"Something else\\")\\n\\n-- \\"Something\\" and then \\"Something else\\" are printed\\n```","params":[{"name":"handle","desc":"","lua_type":"(...: any) -> ()"}],"returns":[{"desc":"","lua_type":"ScriptConnection"}],"function_type":"method","ignore":true,"source":{"line":89,"path":"src/ReplicatedStorage/FastSignal/Deferred.lua"}},{"name":"ConnectOnce","desc":"Connects a function to a ScriptSignal object, but only allows that\\nconnection to run once. any later fire calls won\'t trigger anything\\n\\n```lua\\nScriptSignal:ConnectOnce(function()\\n\\tprint(\\"Connection fired\\")\\nend)\\n\\nScriptSignal:Fire()\\nScriptSignal:Fire()\\n\\n-- \\"Connection fired\\" is only fired once\\n```","params":[{"name":"handle","desc":"","lua_type":"(...: any) -> ()"}],"returns":[],"function_type":"method","ignore":true,"source":{"line":147,"path":"src/ReplicatedStorage/FastSignal/Deferred.lua"}},{"name":"Wait","desc":"Yields the thread until a fire call happens, returns what the signal was fired with\\n\\n```lua\\ntask.spawn(function()\\n\\tprint(\\n\\t\\tScriptSignal:Wait()\\n\\t)\\nend)\\n\\nScriptSignal:Fire(\\"Arg\\", nil, 1, 2, 3, nil)\\n-- \\"Arg\\", nil, 1, 2, 3, nil are printed\\n```","params":[],"returns":[{"desc":"","lua_type":"...any"}],"function_type":"method","yields":true,"ignore":true,"source":{"line":186,"path":"src/ReplicatedStorage/FastSignal/Deferred.lua"}},{"name":"Fire","desc":"Fires a ScriptSignal object with the arguments passed through it\\n\\n```lua\\nScriptSignal:Connect(function(text)\\n\\tprint(text)\\nend)\\n\\nScriptSignal:Fire(\\"Some Text...\\")\\n\\n-- \\"Some Text...\\" is printed twice\\n```","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","ignore":true,"source":{"line":222,"path":"src/ReplicatedStorage/FastSignal/Deferred.lua"}},{"name":"DisconnectAll","desc":"Disconnects all connections from a ScriptSignal object\\nwithout destroying it and without making it unusable\\n\\n```lua\\nlocal connection = ScriptSignal:Connect(function() end)\\n\\nconnection.Connected -> true\\n\\nScriptSignal:DisconnectAll()\\n\\nconnection.Connected -> false\\n```","params":[],"returns":[],"function_type":"method","ignore":true,"source":{"line":249,"path":"src/ReplicatedStorage/FastSignal/Deferred.lua"}},{"name":"Destroy","desc":"Destroys a ScriptSignal object, disconnecting all connections\\nand making it unusable.\\n\\n```lua\\nScriptSignal:Destroy()\\n\\nlocal connection = ScriptSignal:Connect(function() end)\\nconnection.Connected -> false\\n```","params":[],"returns":[],"function_type":"method","ignore":true,"source":{"line":274,"path":"src/ReplicatedStorage/FastSignal/Deferred.lua"}},{"name":"new","desc":"Creates a ScriptSignal object","params":[],"returns":[{"desc":"","lua_type":"ScriptSignal"}],"function_type":"static","ignore":true,"source":{"line":50,"path":"src/ReplicatedStorage/FastSignal/Immediate.lua"}},{"name":"Is","desc":"Returns a boolean determining if the object is a ScriptSignal\\n\\n```lua\\nlocal janitor = Janitor.new()\\nlocal signal = ScriptSignal.new()\\n\\nScriptSignal.Is(signal) -> true\\nScriptSignal.Is(janitor) -> false\\n```","params":[{"name":"object","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","ignore":true,"source":{"line":72,"path":"src/ReplicatedStorage/FastSignal/Immediate.lua"}},{"name":"IsActive","desc":"Returns a boolean determing if a ScriptSignal object is active\\n\\n```lua\\nScriptSignal:IsActive() -> true\\nScriptSignal:Destroy()\\nScriptSignal:IsActive() -> false\\n```","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","ignore":true,"source":{"line":89,"path":"src/ReplicatedStorage/FastSignal/Immediate.lua"}},{"name":"Connect","desc":"Connects a function to the ScriptSignal\\n\\n```lua\\nScriptSignal:Connect(function(text)\\n\\tprint(text)\\nend)\\n\\nScriptSignal:Fire(\\"Something\\")\\nScriptSignal:Fire(\\"Something else\\")\\n\\n-- \\"Something\\" and then \\"Something else\\" are printed\\n```","params":[{"name":"handle","desc":"","lua_type":"(...: any) -> ()"}],"returns":[{"desc":"","lua_type":"ScriptConnection"}],"function_type":"method","ignore":true,"source":{"line":111,"path":"src/ReplicatedStorage/FastSignal/Immediate.lua"}},{"name":"ConnectOnce","desc":"Connects a function to a ScriptSignal object, but only allows that\\nconnection to run once. any later fire calls won\'t trigger anything\\n\\n```lua\\nScriptSignal:ConnectOnce(function()\\n\\tprint(\\"Connection fired\\")\\nend)\\n\\nScriptSignal:Fire()\\nScriptSignal:Fire()\\n\\n-- \\"Connection fired\\" is only fired once\\n```","params":[{"name":"handle","desc":"","lua_type":"(...: any) -> ()"}],"returns":[],"function_type":"method","ignore":true,"source":{"line":169,"path":"src/ReplicatedStorage/FastSignal/Immediate.lua"}},{"name":"Wait","desc":"Yields the thread until a fire call happens, returns what the signal was fired with\\n\\n```lua\\ntask.spawn(function()\\n\\tprint(\\n\\t\\tScriptSignal:Wait()\\n\\t)\\nend)\\n\\nScriptSignal:Fire(\\"Arg\\", nil, 1, 2, 3, nil)\\n-- \\"Arg\\", nil, 1, 2, 3, nil are printed\\n```","params":[],"returns":[{"desc":"","lua_type":"...any"}],"function_type":"method","yields":true,"ignore":true,"source":{"line":208,"path":"src/ReplicatedStorage/FastSignal/Immediate.lua"}},{"name":"Fire","desc":"Fires a ScriptSignal object with the arguments passed through it\\n\\n```lua\\nScriptSignal:Connect(function(text)\\n\\tprint(text)\\nend)\\n\\nScriptSignal:Fire(\\"Some Text...\\")\\n\\n-- \\"Some Text...\\" is printed twice\\n```","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","ignore":true,"source":{"line":244,"path":"src/ReplicatedStorage/FastSignal/Immediate.lua"}},{"name":"DisconnectAll","desc":"Disconnects all connections from a ScriptSignal object\\nwithout destroying it and without making it unusable\\n\\n```lua\\nlocal connection = ScriptSignal:Connect(function() end)\\n\\nconnection.Connected -> true\\n\\nScriptSignal:DisconnectAll()\\n\\nconnection.Connected -> false\\n```","params":[],"returns":[],"function_type":"method","ignore":true,"source":{"line":278,"path":"src/ReplicatedStorage/FastSignal/Immediate.lua"}},{"name":"Destroy","desc":"Destroys a ScriptSignal object, disconnecting all connections\\nand making it unusable.\\n\\n```lua\\nScriptSignal:Destroy()\\n\\nlocal connection = ScriptSignal:Connect(function() end)\\nconnection.Connected -> false\\n```","params":[],"returns":[],"function_type":"method","ignore":true,"source":{"line":303,"path":"src/ReplicatedStorage/FastSignal/Immediate.lua"}},{"name":"new","desc":"Creates a ScriptSignal object","params":[],"returns":[{"desc":"","lua_type":"ScriptSignal"}],"function_type":"static","source":{"line":87,"path":"src/ReplicatedStorage/FastSignal/init.lua"}},{"name":"Is","desc":"Returns a boolean determining if the object is a ScriptSignal\\n\\n```lua\\nlocal janitor = Janitor.new()\\nlocal signal = ScriptSignal.new()\\n\\nScriptSignal.Is(signal) -> true\\nScriptSignal.Is(janitor) -> false\\n```","params":[{"name":"object","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":108,"path":"src/ReplicatedStorage/FastSignal/init.lua"}},{"name":"IsActive","desc":"Returns a boolean determing if a ScriptSignal object is active\\n\\n```lua\\nScriptSignal:IsActive() -> true\\nScriptSignal:Destroy()\\nScriptSignal:IsActive() -> false\\n```","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":124,"path":"src/ReplicatedStorage/FastSignal/init.lua"}},{"name":"Connect","desc":"Connects a function to the ScriptSignal\\n\\n```lua\\nScriptSignal:Connect(function(text)\\n\\tprint(text)\\nend)\\n\\nScriptSignal:Fire(\\"Something\\")\\nScriptSignal:Fire(\\"Something else\\")\\n\\n-- \\"Something\\" and then \\"Something else\\" are printed\\n```","params":[{"name":"handle","desc":"","lua_type":"(...: any) -> ()"}],"returns":[{"desc":"","lua_type":"ScriptConnection"}],"function_type":"method","source":{"line":145,"path":"src/ReplicatedStorage/FastSignal/init.lua"}},{"name":"ConnectOnce","desc":"Connects a function to a ScriptSignal object, but only allows that\\nconnection to run once. any later fire calls won\'t trigger anything\\n\\n```lua\\nScriptSignal:ConnectOnce(function()\\n\\tprint(\\"Connection fired\\")\\nend)\\n\\nScriptSignal:Fire()\\nScriptSignal:Fire()\\n\\n-- \\"Connection fired\\" is only fired once\\n```","params":[{"name":"handle","desc":"","lua_type":"(...: any) -> ()"}],"returns":[],"function_type":"method","source":{"line":202,"path":"src/ReplicatedStorage/FastSignal/init.lua"}},{"name":"Wait","desc":"Yields the thread until a fire call happens, returns what the signal was fired with\\n\\n```lua\\ntask.spawn(function()\\n\\tprint(\\n\\t\\tScriptSignal:Wait()\\n\\t)\\nend)\\n\\nScriptSignal:Fire(\\"Arg\\", nil, 1, 2, 3, nil)\\n-- \\"Arg\\", nil, 1, 2, 3, nil are printed\\n```","params":[],"returns":[{"desc":"","lua_type":"...any"}],"function_type":"method","yields":true,"source":{"line":240,"path":"src/ReplicatedStorage/FastSignal/init.lua"}},{"name":"Fire","desc":"Fires a ScriptSignal object with the arguments passed through it\\n\\n```lua\\nScriptSignal:Connect(function(text)\\n\\tprint(text)\\nend)\\n\\nScriptSignal:Fire(\\"Some Text...\\")\\n\\n-- \\"Some Text...\\" is printed twice\\n```","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","source":{"line":275,"path":"src/ReplicatedStorage/FastSignal/init.lua"}},{"name":"DisconnectAll","desc":"Disconnects all connections from a ScriptSignal object\\nwithout destroying it and without making it unusable\\n\\n```lua\\nlocal connection = ScriptSignal:Connect(function() end)\\n\\nconnection.Connected -> true\\n\\nScriptSignal:DisconnectAll()\\n\\nconnection.Connected -> false\\n```","params":[],"returns":[],"function_type":"method","source":{"line":300,"path":"src/ReplicatedStorage/FastSignal/init.lua"}},{"name":"Destroy","desc":"Destroys a ScriptSignal object, disconnecting all connections\\nand making it unusable.\\n\\n```lua\\nScriptSignal:Destroy()\\n\\nlocal connection = ScriptSignal:Connect(function() end)\\nconnection.Connected -> false\\n```","params":[],"returns":[],"function_type":"method","source":{"line":323,"path":"src/ReplicatedStorage/FastSignal/init.lua"}}],"properties":[],"types":[],"name":"ScriptSignal","desc":"","source":{"line":23,"path":"src/ReplicatedStorage/FastSignal/init.lua"}}')}}]);