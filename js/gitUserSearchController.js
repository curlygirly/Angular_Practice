githubUserSearch.controller('GitUserSearchController', function($controller){

var self = this;
  self.searchResult = {
    "items":[
      {
      "login": "tansaku",
      "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
      "html_url": "https://github.com/tansaku"
    },
    {
      "login": "stephenlloyd",
      "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
      "html_url": "https://github.com/stephenlloyd"
    },
     {
      "login": "curlygirly",
      "avatar_url": "https://avatars1.githubusercontent.com/u/11654909?v=3",
      "html_url": "https://github.com/curlygirly"
      }
    ]
  };


  self.doSearch = function(){
      self.searchResult = {
        items:[
         {
        "login": "tansaku",
        "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
        "html_url": "https://github.com/tansaku"
      },
      {
        "login": "stephenlloyd",
        "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
        "html_url": "https://github.com/stephenlloyd"
      },
       {
        "login": "curlygirly",
        "avatar_url": "https://avatars1.githubusercontent.com/u/11654909?v=3",
        "html_url": "https://github.com/curlygirly"
        }
      ]
    };
  };
});
