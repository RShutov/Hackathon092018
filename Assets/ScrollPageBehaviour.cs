using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine;

public class ScrollPageBehaviour : MonoBehaviour {

    [DllImport("__Internal")]
    private static extern float getContainerPosition();

    // Use this for initialization
    void Start () { }
	
	// Update is called once per frame
	void Update () {
        try
        {
            var normalPosition = getContainerPosition();
            var position = gameObject.transform.position;
            position.y = 3f - 6f * normalPosition;
            gameObject.transform.position = position;
        } catch {

        }
    }
}
