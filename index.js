"use strict"; {
    angular.module("app", []);
    $.get({
        url: " ",
        data: {
            name: "hello flickr " ,
            api_key: "your key here"
        }
    }, (responseBody) => {
        console.log(responseBody);
    }
    });
