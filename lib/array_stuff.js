Array.prototype.transpose=function(){var a=this,w=a.length?a.length:0,h=a[0]instanceof Array?a[0].length:0;if(h===0||w===0){return[]}var i,j,t=[];for(i=0;i<h;i++){t[i]=[];for(j=0;j<w;j++){t[i][j]=a[j][i]}}return t};if(typeof jQuery!=='undefined'){jQuery.transpose=function(o){if(o instanceof Array){return o.transpose()}}} // from http://www.shamasis.net/

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};