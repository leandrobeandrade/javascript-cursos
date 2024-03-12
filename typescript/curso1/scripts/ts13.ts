class AjaxTest {
	// o = inicializado / 1 = enviando / 2 = enviado / 3 = processando / 4 = completado
  
	private READY_STATE_CODE = 4;
  
	private Completado(req: XMLHttpRequest) {
	  return req.readyState == this.READY_STATE_CODE;
	}
  
	public httpGet(
	  url: string,
	  callback: (status: number, response: string) => any
	): void {
	  let req = new XMLHttpRequest();
  
	  req.onreadystatechange = () => {
		let finalizado = this.Completado(req);
		if (finalizado) {
		  callback(req.status, req.responseText);
		}
	  };
  
	  req.open("Get", url, true);
	  req.send();
	}
  
	public httpPost(
	  url: string,
	  data: string,
	  callback: (status: number, response: string) => any
	): void {
	  let req = new XMLHttpRequest();
  
	  req.onreadystatechange = () => {
		let finalizado = this.Completado(req);
		if (finalizado) {
		  callback(req.status, req.responseText);
		}
	  };
  
	  req.open("Post", url, true);
	  req.setRequestHeader("Content-type", "aplication/json");
	  req.send(data);
	}
  }
  
  let ajax_get = new AjaxTest();
  ajax_get.httpGet(
	"http://httpbin.org/ip",
	(status: number, response: string) => {
	  console.log("http://httpbin.org/ip", status);
	  console.log("http://httpbin.org/ip", response);
	}
  );
  
  let ajax_post = new AjaxTest();
  ajax_post.httpPost(
	"http://httpbin.org/post",
	"{nome:Fulano, empresa:TSX100}",
	(status: number, response: string) => {
	  console.log("http://httpbin.org/post", status);
	  console.log("http://httpbin.org/post", response);
	}
  );
  