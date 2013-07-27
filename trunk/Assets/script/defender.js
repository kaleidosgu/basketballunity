var g_bDirectionUp : boolean = true;
function Update () {
	if( g_bDirectionUp ) {
		if( transform.position.y < 4 ) {
			print("up");
			transform.position.y += 0.1;
		}
		else {
			g_bDirectionUp = false;
		}
	}
	else {
		if( transform.position.y > 1 ) {
			print("down");
			transform.position.y -= 0.1;
		}
		else {
			g_bDirectionUp = true;
		}
	}
}