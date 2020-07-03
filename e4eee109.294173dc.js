(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{153:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var a=t(2),i=t(9),r=(t(0),t(161)),o={title:"Working with Maps and BigMaps",author:"Roxane Letourneau"},c={id:"maps_bigmaps",title:"Working with Maps and BigMaps",description:"Learn how to:",source:"@site/../docs/maps_bigmaps.md",permalink:"/docs/maps_bigmaps",sidebar:"docs",previous:{title:"Validation functions",permalink:"/docs/validators"},next:{title:"In Memory Signer",permalink:"/docs/inmemory_signer"}},s=[{value:"A Contract with a single Map for storage",id:"a-contract-with-a-single-map-for-storage",children:[{value:"Origination of the contract with an initial storage",id:"origination-of-the-contract-with-an-initial-storage",children:[]},{value:"Accessing the values of the map",id:"accessing-the-values-of-the-map",children:[]}]},{value:"A Contract with a Map using an unannotated pair/tuple as a key",id:"a-contract-with-a-map-using-an-unannotated-pairtuple-as-a-key",children:[{value:"Origination of the contract with Pair as Map keys",id:"origination-of-the-contract-with-pair-as-map-keys",children:[]},{value:"Accessing Map values using Pairs",id:"accessing-map-values-using-pairs",children:[]}]},{value:"A Map with nested Pairs as keys",id:"a-map-with-nested-pairs-as-keys",children:[{value:"Origination a contract with complex keys",id:"origination-a-contract-with-complex-keys",children:[]},{value:"Accessing Map values with complex keys",id:"accessing-map-values-with-complex-keys",children:[]}]},{value:"BigMaps",id:"bigmaps",children:[{value:"Contract storage containing a map and a bigMap",id:"contract-storage-containing-a-map-and-a-bigmap",children:[]}]}],p={rightToc:s};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Learn how to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fetch data from a ",Object(r.b)("inlineCode",{parentName:"li"},"Map")," datatype on a Tezos Smart Contract"),Object(r.b)("li",{parentName:"ul"},"Fetch data from a ",Object(r.b)("inlineCode",{parentName:"li"},"BigMap")," datatype on a Tezos Smart Contract"),Object(r.b)("li",{parentName:"ul"},"Initialize ",Object(r.b)("inlineCode",{parentName:"li"},"Map")," data while originating a new contract to the Tezos Blockchain"),Object(r.b)("li",{parentName:"ul"},"Use Pairs as a key to access ",Object(r.b)("inlineCode",{parentName:"li"},"Map")," and ",Object(r.b)("inlineCode",{parentName:"li"},"BigMap")," values"),Object(r.b)("li",{parentName:"ul"},"Why Michelson ",Object(r.b)("inlineCode",{parentName:"li"},"Map")," and ",Object(r.b)("inlineCode",{parentName:"li"},"BigMap")," don't look like a Javascript ",Object(r.b)("inlineCode",{parentName:"li"},"Map"))),Object(r.b)("p",null,"Taquito provides ",Object(r.b)("inlineCode",{parentName:"p"},"MichelsonMap"),", which makes it easy and familiar for developers to work with the native Michelson map datatypes. ",Object(r.b)("inlineCode",{parentName:"p"},"MichelsonMap")," supports initialization, get and set methods to ",Object(r.b)("inlineCode",{parentName:"p"},"Maps")," using primitive datatypes and pairs as keys."),Object(r.b)("p",null,"Michelson offers two variants of ",Object(r.b)("inlineCode",{parentName:"p"},"Maps")," that are semantically the same but have different implementations and trade-offs in terms of ",Object(r.b)("inlineCode",{parentName:"p"},"gas")," and ",Object(r.b)("inlineCode",{parentName:"p"},"storage")," costs on a contract. A ",Object(r.b)("inlineCode",{parentName:"p"},"Map")," will use more storage but cost less gas, whereas a ",Object(r.b)("inlineCode",{parentName:"p"},"BigMap")," will consume less storage but has higher gas costs during the execution of the Smart Contract."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://michelson.nomadic-labs.com/#type-big_map"}),"Michelson documentation for Map")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://michelson.nomadic-labs.com/#type-big_map"}),"Michelson documentation for BigMap"))),Object(r.b)("h2",{id:"a-contract-with-a-single-map-for-storage"},"A Contract with a single Map for storage"),Object(r.b)("h3",{id:"origination-of-the-contract-with-an-initial-storage"},"Origination of the contract with an initial storage"),Object(r.b)("p",null,"This example builds on the Ligo Lang Taco Shop learning resources."),Object(r.b)("p",null,"The storage of the contract used in the following example is a map where a key is a natural number (a ",Object(r.b)("inlineCode",{parentName:"p"},"nat"),"), and a value is a pair composed of two values representing the quantity of stock and ",Object(r.b)("inlineCode",{parentName:"p"},"tez")," tokens respectively. The source code of the contract is available ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://ligolang.org/docs/tutorials/get-started/tezos-taco-shop-smart-contract#making-sure-we-get-paid-for-our-tacos"}),"here"),". In the example, the contract is originated with initial values using the ",Object(r.b)("inlineCode",{parentName:"p"},"MichelsonMap")," class' ",Object(r.b)("inlineCode",{parentName:"p"},"set")," method."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),'import { MichelsonMap } from "@taquito/taquito";\n\nconst storageMap = new MichelsonMap();\nstorageMap.set("1", {current_stock: "10000", max_price : "50"})\nstorageMap.set("2", {current_stock: "120", max_price : "20"})\nstorageMap.set("3", {current_stock: "50", max_price : "60"})\n\n// contractMapTacoShop variable contains the Michelson Smart Contract source code, and is not shown for brevity\nTezos.contract.originate({\n  code: contractMapTacoShop,\n  storage: storageMap,\n})\n.then(contractOriginated => {\n  println(`Waiting for confirmation of origination for ${contractOriginated.contractAddress}...`);\n  return contractOriginated.contract()\n})\n.then (contract => {\n  println(`Origination completed.`);\n})\n.catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"fromLiteral")," convenience method can be used instead of using ",Object(r.b)("inlineCode",{parentName:"p"},"set")," for each element. Here is the same ",Object(r.b)("inlineCode",{parentName:"p"},"origination")," operation but using ",Object(r.b)("inlineCode",{parentName:"p"},"fromLiteral")," to create our ",Object(r.b)("inlineCode",{parentName:"p"},"MichelsonMap"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),'import { MichelsonMap } from "@taquito/taquito";\n\nTezos.contract.originate({\n  code: contractMapTacoShop,\n  storage: MichelsonMap.fromLiteral({\n    "1": {current_stock: "10000", max_price : "50"},\n    "2": {current_stock: "120", max_price : "20"},\n    "3": {current_stock: "50", max_price : "60"}\n  }),\n})\n.then(contractOriginated => {\n  println(`Waiting for confirmation of origination for ${contractOriginated.contractAddress}...`);\n  return contractOriginated.contract()\n})\n.then (contract => {\n  println(`Origination completed.`);\n})\n.catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n')),Object(r.b)("h3",{id:"accessing-the-values-of-the-map"},"Accessing the values of the map"),Object(r.b)("p",null,"This example loads the same type of Taco Shop contract (we created this one earlier). Taquito provides a ",Object(r.b)("inlineCode",{parentName:"p"},"get")," method of the ",Object(r.b)("inlineCode",{parentName:"p"},"MichelsonMap")," on storage of type ",Object(r.b)("inlineCode",{parentName:"p"},"Map"),", and in this case, we access the value stored with a key of ",Object(r.b)("inlineCode",{parentName:"p"},"1"),"."),Object(r.b)("p",null,"Then, the example calls the Contracts ",Object(r.b)("inlineCode",{parentName:"p"},"main")," function of the contract using the key ",Object(r.b)("inlineCode",{parentName:"p"},"1")," as its parameter. Remember, we can only change contracts storage by calling the function provided by the contract. The ",Object(r.b)("inlineCode",{parentName:"p"},"main")," function on this Smart Contract has the effect of decreasing the value of the ",Object(r.b)("inlineCode",{parentName:"p"},"current_stock")," associated with the key ",Object(r.b)("inlineCode",{parentName:"p"},"1"),". The ",Object(r.b)("inlineCode",{parentName:"p"},"get")," method of the ",Object(r.b)("inlineCode",{parentName:"p"},"MichelsonMap")," class is used again to see the difference in storage after the method call."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"Tezos.contract.at('KT1WEQQ7RRrzUH7PU9NGMyuTbTF3kjnKynUW')\n.then( myContract => {\n  return myContract.storage()\n  .then (myStorage => {\n    //We want to see the value of the key \"1\"\n    const value = myStorage.get('1')\n    println(`The key \"1\" of the map has a current_stock of ${value[Object.keys(value)[0]]} and a max_price of   ${value[Object.keys(value)[1]]}.`);\n\n    //Calling the main method of the contract will modify the storage\n    return myContract.methods.main('1').send()\n  }).then(op => {\n    println(`Waiting for ${op.hash} to be confirmed...`);\n      return op.confirmation(1).then(() => op.hash);\n  }).then(hash => {\n    println(`Operation injected.`);\n\n    //Use the get method to see the change in storage\n    return myContract.storage()\n  }).then (myStorage => {\n    const value = myStorage.get('1')\n    println(`The key \"1\" of the map has now a current_stock of ${value[Object.keys(value)[0]]} and a max_price of ${value[Object.keys(value)[1]]}.`)\n  })\n}).catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n")),Object(r.b)("h2",{id:"a-contract-with-a-map-using-an-unannotated-pairtuple-as-a-key"},"A Contract with a Map using an unannotated pair/tuple as a key"),Object(r.b)("p",null,"Here we have the storage of our contract defined in JSON Michelson."),Object(r.b)("p",null,"It has a ",Object(r.b)("inlineCode",{parentName:"p"},"Map")," with the annotated name ",Object(r.b)("inlineCode",{parentName:"p"},"%theMap"),". This ",Object(r.b)("inlineCode",{parentName:"p"},"Map")," uses a pair consisting of a natural number and an address as its key ",Object(r.b)("inlineCode",{parentName:"p"},"(1, tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx)"),". Its value is also a pair of values, consisting of an ",Object(r.b)("inlineCode",{parentName:"p"},"int")," (annotated as ",Object(r.b)("inlineCode",{parentName:"p"},"%quantity"),") and ",Object(r.b)("inlineCode",{parentName:"p"},"mutez")," (annotated as ",Object(r.b)("inlineCode",{parentName:"p"},"%amount"),")."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{ "prim": "storage",\n    "args":\n      [ { "prim": "pair",\n          "args":\n            [ { "prim": "pair",\n                "args":\n                  [ { "prim": "address", "annots": [ "%theAddress" ] },\n                    { "prim": "map",\n                      "args":\n                        [ { "prim": "pair",\n                            "args":\n                              [ { "prim": "nat" }, { "prim": "address" } ] },\n                          { "prim": "pair",\n                            "args":\n                              [ { "prim": "mutez", "annots": [ "%amount" ] },\n                                { "prim": "int", "annots": [ "%quantity" ] } ] } ],\n                      "annots": [ "%theMap" ] } ] },\n              { "prim": "int", "annots": [ "%theNumber" ] } ] } ] }\n')),Object(r.b)("h3",{id:"origination-of-the-contract-with-pair-as-map-keys"},"Origination of the contract with Pair as Map keys"),Object(r.b)("p",null,"Since the key of the map has no annotations, MichelsonMap requires that we use an index value starting at ",Object(r.b)("inlineCode",{parentName:"p"},"0")," to initialize its elements."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"import { MichelsonMap } from \"@taquito/taquito\";\n\nconst storageMap = new MichelsonMap();\n//First entry of the map\nstorageMap.set({ // Pair as Key\n  0 : '1', //nat\n  1 : 'tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx' //address\n},\n{ quantity: '10', amount: '100' })\n\n//Second entry of the map\nstorageMap.set({ // Pair as Key\n  0 : '2', //nat\n  1 : 'tz1h3rQ8wBxFd8L9B3d7Jhaawu6Z568XU3xY' //address\n},\n{ quantity: '20', amount: '200' })\n\n//Third entry of the map\nstorageMap.set({\n  0 : '3', //nat\n  1 : 'tz1eY5Aqa1kXDFoiebL28emyXFoneAoVg1zh' //address\n},\n{ quantity: '30', amount: '300' })\n\n// contractMapPairKey variable contains the Michelson Smart Contract\nTezos.contract.originate({\n  code: contractMapPairKey,\n  storage: {\n    theAddress: 'tz1NAozDvi5e7frVq9cUaC3uXQQannemB8Jw',\n    theMap : storageMap,\n    theNumber: 10\n  }\n})\n.then(contractOriginated => {\n    println(`Waiting for the contract origination of ${contractOriginated.contractAddress}...`);\n    return contractOriginated.contract()\n    })\n    .then (contract => {\n        println(`Origination completed.`);\n    })\n  .catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n")),Object(r.b)("h3",{id:"accessing-map-values-using-pairs"},"Accessing Map values using Pairs"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"get")," method of the ",Object(r.b)("inlineCode",{parentName:"p"},"MichelsonMap")," class can be used to access values of the map for a specified key."),Object(r.b)("p",null,"This example accesses the map using its ",Object(r.b)("inlineCode",{parentName:"p"},"theMap")," annotation. If the storage does now annotate its properties, the caller must use numeric indexes instead."),Object(r.b)("p",null,"Recall that this contract does not annotate the pairs of the key pair either, we use numeric indexes for this also."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"Tezos.contract.at('KT1SPQToSLv7NFvaiJXNYpGjXS9BJwJ3zkAW')\n.then( myContract => {\n  return myContract.storage()\n})\n.then ( myStorage => {\n  const value = myStorage['theMap'].get({\n    0 : '2', //nat\n    1 : 'tz1h3rQ8wBxFd8L9B3d7Jhaawu6Z568XU3xY' //address\n  })\n  println(`Values associated with this key : amount : ${value[Object.keys(value)[0]]}, quantity :\n    ${value[Object.keys(value)[1]]}`);\n}).catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n")),Object(r.b)("h2",{id:"a-map-with-nested-pairs-as-keys"},"A Map with nested Pairs as keys"),Object(r.b)("p",null,"This contract schema has a key with eight nested pairs and value of an int. This example type of key is impractical, but we offer it as an example to illustrate how to work with complex keys."),Object(r.b)("p",null,"The JSON Michelson storage schema with a map using eight pairs as a key:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "prim": "storage",\n  "args":\n    [\n      {\n        prim: \'map\',\n        args: [\n          {\n            prim: "pair", args: [\n              { prim: "int" },\n              {\n                prim: "pair", args: [\n                  { prim: "nat" },\n                  {\n                    prim: "pair", args: [\n                      { prim: "string" },\n                      {\n                        prim: "pair", args: [\n                          { prim: "bytes" },\n                          {\n                            prim: "pair", args: [\n                              { prim: "mutez" },\n                              {\n                                prim: "pair", args: [\n                                  { prim: "bool" },\n                                  {\n                                    prim: "pair", args: [\n                                      { prim: "key_hash" },\n                                      {\n                                        prim: "pair", args: [\n                                          { prim: "timestamp" },\n                                          { prim: "address" }\n                                        ]\n                                      }\n                                    ]\n                                  }\n                                ]\n                              }\n                            ]\n                          }\n                        ]\n                      }\n                    ]\n                  }\n                ]\n              }\n            ]\n          }, { prim: "int" }]\n      },\n    ]\n}\n')),Object(r.b)("h3",{id:"origination-a-contract-with-complex-keys"},"Origination a contract with complex keys"),Object(r.b)("p",null,"The contract schema in this example does not have map annotations which means that each value needs to have an index as a property name."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),'import { MichelsonMap } from "@taquito/taquito";\n\nconst storageMap = new MichelsonMap();\nstorageMap.set({\n  0: "1",                                    // int\n  1: "2",                                    // nat\n  2: "test",                                 // string\n  3: "cafe",                                 // bytes\n  4: "10",                                   // mutez\n  5: true,                                   // bool\n  6: "tz3WXYtyDUNL91qfiCJtVUX746QpNv5i5ve5", // key_hash\n  7: "2019-09-06T15:08:29.000Z",             // timestamp\n  8: "tz3WXYtyDUNL91qfiCJtVUX746QpNv5i5ve5"  // address\n}, 100)\n\nstorageMap.set({\n  0: "10",                                    // int\n  1: "20",                                    // nat\n  2: "Hello",                                 // string\n  3: "ffff",                                  // bytes\n  4: "100",                                   // mutez\n  5: false,                                   // bool\n  6: "tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx",  // key_hash\n  7: "2019-10-06T15:08:29.000Z",              // timestamp\n  8: "tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx"   // address\n}, 1000)\n\n// contractMap8pairs variable contains the Michelson Smart Contract\nTezos.contract.originate({\n  code: contractMap8pairs,\n  storage: storageMap,\n})\n.then(contractOriginated => {\n  println(`Waiting for the contract origination of ${contractOriginated.contractAddress}...`);\n  return contractOriginated.contract()\n})\n.then (contract => {\n  println(`Origination completed.`);\n})\n.catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n')),Object(r.b)("h3",{id:"accessing-map-values-with-complex-keys"},"Accessing Map values with complex keys"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"get")," method of the ",Object(r.b)("inlineCode",{parentName:"p"},"MichelsonMap")," class accesses values of the map for a specified key."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),'Tezos.contract.at(\'KT1E6AFEshyEmjML4dUmSNTRzNmnDdPqWzrr\')\n.then( myContract => {\n  return myContract.storage()\n})\n.then ( myStorage => {\n  const value = myStorage.get({\n    0: "1",                                    // int\n    1: "2",                                    // nat\n    2: "test",                                 // string\n    3: "cafe",                                 // bytes\n    4: "10",                                   // mutez\n    5: true,                                   // bool\n    6: "tz3WXYtyDUNL91qfiCJtVUX746QpNv5i5ve5", // key_hash\n    7: "2019-09-06T15:08:29.000Z",             // timestamp\n    8: "tz3WXYtyDUNL91qfiCJtVUX746QpNv5i5ve5"  // address\n  })\n  println(`The value associated to this key is ${value}.`);\n}).catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n')),Object(r.b)("h2",{id:"bigmaps"},"BigMaps"),Object(r.b)("p",null,"Map and BigMap are semantically the same (except one difference), everything you learned about Maps applies to working with BigMap's. The only difference is that when calling ",Object(r.b)("inlineCode",{parentName:"p"},"get")," on a BigMap will return a Javascript Promise whereas get on a Map returns directly. "),Object(r.b)("h3",{id:"contract-storage-containing-a-map-and-a-bigmap"},"Contract storage containing a map and a bigMap"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"MichelsonMap")," class also supports the ",Object(r.b)("inlineCode",{parentName:"p"},"bigMap")," type. The following example uses a contract containing both a map and a bigMap in its storage. Here is the JSON Michelson definition of storage for this example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{ "prim": "storage",\n    "args":\n      [ { "prim": "pair",\n          "args":\n            [ { "prim": "big_map",\n                "args":\n                  [ { "prim": "pair",\n                      "args": [ { "prim": "nat" }, { "prim": "address" } ] },\n                    { "prim": "int" } ], "annots": [ "%thebigmap" ] },\n              { "prim": "map",\n                "args":\n                  [ { "prim": "pair",\n                      "args": [ { "prim": "nat" }, { "prim": "address" } ] },\n                    { "prim": "int" } ], "annots": [ "%themap" ] } ] } ] }\n')),Object(r.b)("h4",{id:"origination-of-the-contract-with-an-initial-storage-1"},"Origination of the contract with an initial storage"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"import { MichelsonMap } from \"@taquito/taquito\";\n\nconst storageMap = new MichelsonMap();\nstorageMap.set({\n  0 : '1', //nat\n  1 : 'tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx' //address\n  }, 10)\nstorageMap.set({\n  0 : '2', //nat\n  1 : 'tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx' //address\n  }, 20)\n\nconst storageBigMap = new MichelsonMap();\nstorageBigMap.set({\n  0 : '10', //nat\n  1 : 'tz3WXYtyDUNL91qfiCJtVUX746QpNv5i5ve5' //address\n  }, 100)\nstorageBigMap.set({\n  0 : '20', //nat\n  1 : 'tz3WXYtyDUNL91qfiCJtVUX746QpNv5i5ve5' //address\n  }, 200)\n// contractMapBigMap variable contains the Michelson Smart Contract\nTezos.contract.originate({\n  code: contractMapBigMap,\n  storage: {\n    themap : storageMap,\n    thebigmap : storageBigMap\n  }\n})\n.then(contractOriginated => {\n  println(`Waiting for the contract origination of ${contractOriginated.contractAddress}...`);\n  return contractOriginated.contract()\n})\n.then (contract => {\n  println(`Origination completed.`);\n})\n.catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n")),Object(r.b)("h4",{id:"accessing-the-values-of-the-map-and-the-bigmap"},"Accessing the values of the map and the bigMap"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"get")," method of the ",Object(r.b)("inlineCode",{parentName:"p"},"MichelsonMap")," class accesses the values of the map and values of the bigMap. The difference is that for a map, the value gets returned directly while the get method on a bigMap returns a promise."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"Tezos.contract.at('KT1McL1e8UgHUMxxW9B8jxifcLKP11Pyv1wC')\n.then( myContract => {\n  return myContract.storage()\n  .then ( myStorage => {\n    //When called on a map, the get method returns the value directly\n    const valueMap = myStorage['themap'].get({\n      0 : '1', //nat\n      1 : 'tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx' //address\n    })\n    println(`The value associated with the specified key of the map is ${valueMap}.`);\n    return myContract.storage()\n  })\n\n  .then ( myStorage => {\n  //When called on a bigMap, the get method returns a promise\n    return myStorage['thebigmap'].get({\n      0 : '10', //nat\n      1 : 'tz3WXYtyDUNL91qfiCJtVUX746QpNv5i5ve5' //address\n    })\n  }).then (valueBigMap => {\n    println(`The value associated with the specified key of the bigMap is ${valueBigMap}.`);\n  })\n})\n.catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n")),Object(r.b)("hr",null))}l.isMDXComponent=!0},161:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),l=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=l(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),b=a,d=m["".concat(o,".").concat(b)]||m[b]||h[b]||r;return t?i.a.createElement(d,c(c({ref:n},p),{},{components:t})):i.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<r;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);