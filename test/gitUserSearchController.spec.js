describe('GitUserSearchController', function(){
  beforeEach(module('GitUserSearch'));

  var ctrl;
  var fakeSearch;

  //  beforeEach(function(){
  //   module(function ($provide) {
  //     $provide.value('Search', fakeSearch);
  //   });
  // });

   beforeEach(inject(function($q){

   }));

  beforeEach(inject(function($controller){
    ctrl = $controller('GitUserSearchController');
  }));


  it('initialises with an empty search result and term', function(){
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();

    });

  describe('when searching for a user', function(){

    it('displays search results', function(){
      ctrl.searchTerm = 'hello';
      ctrl.doSearch();
      expect(ctrl.searchResult.items).toEqual(items);
    });
  });
});
