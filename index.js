"use strict"; {
    angular.module("app", []);
    $.get({
        url: "https://www.themoviedb.org",
        data: {
            title: "Fight Club",
            api_key: "4f4565d06d2dff19a79a1c507b52ff3d"
        }
    }, (responseBody) => {
        console.log(responseBody);
    }) 
}
