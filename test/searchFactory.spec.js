describe('factory: Search', function() {

  var search;

  beforeEach(module('GitUserSearch'));

  beforeEach(inject(function($httpBackend){
      httpBackend = $httpBackend
      httpBackend
        .expectGET("https://api.github.com/search/users?q=hello")
        .respond(
          { items: items }
          );
    }));

   beforeEach(inject(function(Search){
    search = Search;
  }));

   var items = [
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
    ];


  it('returns search results', function(){
    search.query('hello')
      .then(function(response) {
        expect(response.data).toEqual(items)
      });
  });

  it('responds to query', function(){
    expect(search.query).toBeDefined();
  });

});