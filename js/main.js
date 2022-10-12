  const blob_anim = KUTE.fromTo(
        "#blob1",
        {path: "#blob1"},
        {path: "#blob2"},
        {repeat: 999, duration: 3000, yoyo: true})

  blob_anim.start()
