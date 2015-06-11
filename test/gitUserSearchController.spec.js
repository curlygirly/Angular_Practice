describe('GitUserSearchController', function(){
  beforeEach(module('GitUserSearch'));

  var ctrl, scope, fakeService, q;

  beforeEach(inject(function($controller, $rootScope, $q){
    scope = $rootScope.$new();
    fakeSearch = jasmine.createSpyObj('fakeSearch', ['query']); // here we create and inject a fakeService with a 'query' property
    q = $q;
    ctrl = $controller('GitUserSearchController', { Search: fakeSearch });
  }));


  it('initialises with an empty search result and term', function(){
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function(){

    beforeEach(function() {
      fakeSearch.query.and.returnValue(q.when({ data: { items: "hello" }})); // returns a "fake" promise
    });

    it('displays search results', function(){
      var items = "hello";
      ctrl.searchTerm = 'hello';
      ctrl.doSearch();
      scope.$apply(); // this resolves the promise
      expect(ctrl.searchResult.items).toEqual(items);
    });
  });
});
