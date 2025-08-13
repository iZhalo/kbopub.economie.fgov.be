if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
  if (dwr.engine._getObject("EHealthService") == undefined) {
    var p;
    
    p = {};

    /**
     * @param {class java.lang.Long} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.getEHealthAuthorizations = function(p0, callback) {
      return dwr.engine._execute(p._path, 'EHealthService', 'getEHealthAuthorizations', arguments);
    };
    
    dwr.engine._setObject("EHealthService", p);
  }
})();

