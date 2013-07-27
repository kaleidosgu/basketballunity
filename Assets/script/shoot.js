var myballPrefab : Transform;
var m_MousePosition :Vector2;
var m_pBallObj : Object;
var myAudioFile : AudioClip;
static var SCORE_GET = 0;
static var BALL_COUNTS = 3;
static var s_nBallCount = 0;
static var g_arrBall = new Array ();
var b_dead : boolean = false;
var tick : int = 0;
function Awake() {
	// GameObject.Find("GUI SCORE").guiText.text = "Score: 0";
}
function Update () {
	if ( Input.GetButtonUp("Fire1")) {
		//if ( s_nBallCount < BALL_COUNTS ) {
			//get force value
			var tramPt = GameObject.Find("t_forcePointer");
			tramPt.animation.Stop();
			print("animate " + tramPt.animation.clip.frameRate );
			var fForceValue = tramPt.transform.position.y - 0.84;
			fForceValue = fForceValue + 0.03;
			fForceValue = fForceValue * 3500;
			tramPt.transform.position.y = 0.84;
			
			if ( s_nBallCount >= BALL_COUNTS ) {
				var tmpObj = g_arrBall.Shift ();
				if ( tmpObj != null ) {
					Destroy(tmpObj.gameObject);
					s_nBallCount--;
				}
			}
			//设置位置
			var tmpTransPos : Vector3 = transform.position;
			tmpTransPos.y = tmpTransPos.y + 1;
			m_pBallObj = Instantiate(myballPrefab, tmpTransPos,Quaternion.identity);
			
			g_arrBall.Push(m_pBallObj);
			
			//数球
			s_nBallCount++;
			GameObject.Find("GUI BALL").guiText.text = "Ball: " + s_nBallCount;
			
			//设置抛掷速度
			var tmpVector3d : Vector3 = transform.forward;
			tmpVector3d.y = tmpVector3d.y + m_MousePosition.y + 1;
			m_pBallObj.rigidbody.AddForce(tmpVector3d * fForceValue);
			
			audio.PlayOneShot(myAudioFile);
			
		//}
	}
	else if( Input.GetButtonDown("Fire1")) {
		var tramForce = GameObject.Find  ("t_forcePointer");
		tramForce.animation.Play("force_point");
	}
	// print("xi" + transform.localRotation.ToString());
} 
function OnGUI() {
    var e : Event = Event.current;
	m_MousePosition = e.delta;
}
function OnControllerColliderHit( hit: ControllerColliderHit ) {
	if( hit.gameObject.tag == "fallout" ) {
		b_dead = true;
	}
}
function LateUpdate() {
	if( b_dead == true ) {
		transform.position = Vector3(15,1.5,5.7);
		b_dead = false;
	}
}