var rayCastLen = 1;
function Update() {
	var hit : RaycastHit;
	if( Physics.Raycast(transform.position,transform.forward,hit,rayCastLen)) {
		if ( hit.collider.gameObject.tag == "ball") {
			print("haha");
		}
	}
}