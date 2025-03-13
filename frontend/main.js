$(document).ready(function () {
  $(".text").textillate({
    loop: true,
    speed: 1500,
    sync: true,
    in: {
      effect: "bounceIn",
    },
    out: {
      effect: "bounceOut",
    },
  });
  $(".siri-message").textillate({
    loop: true,
    speed: 1500,
    sync: true,
    in: {
      effect: "fadeInUp",
      sync: true,
    },
    out: {
      effect: "fadeOutUp",
      sync: true,
    },
  });
  var siriWave = new SiriWave({
    container: document.getElementById("siri-container"),
    width: 940,
    style: "ios9",
    amplitude: "1",
    speed: "0.30",
    height: 200,
    autostart: true,
  });
  
  // Mic button click event handler
  $("#MicBtn").click(function () {
    eel.playAssistantSound()(function (returnValue) {
      // Handle return value if needed
    });
    $("#Oval").attr("hidden", true);
    $("#SiriWave").attr("hidden", false);
    eel.allCommands()(function (returnValue) {
      // Handle return value if needed
    });
  });
  
  // Keyboard shortcut handler
  function doc_keyUp(e) {
    // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time
    if (e.key === 'j' && e.metaKey) {
      eel.playAssistantSound()(function (returnValue) {
        // Handle return value if needed
      });
      $("#Oval").attr("hidden", true);
      $("#SiriWave").attr("hidden", false);
      eel.allCommands()(function (returnValue) {
        // Handle return value if needed
      });
    }
  }
  
  document.addEventListener('keyup', doc_keyUp, false);
  
  // Play assistant function
  function PlayAssistant(message) {
    if (message != "") {
      $("#Oval").attr("hidden", true);
      $("#SiriWave").attr("hidden", false);
      eel.allCommands(message)(function (returnValue) {
        // Handle return value if needed
      });
      $("#chatbox").val("");
      $("#MicBtn").attr('hidden', false);
      $("#SendBtn").attr('hidden', true);
    }
  }
  
  // Toggle function to hide and display mic and send button 
  function ShowHideButton(message) {
    if (message.length == 0) {
      $("#MicBtn").attr('hidden', false);
      $("#SendBtn").attr('hidden', true);
    }
    else {
      $("#MicBtn").attr('hidden', true);
      $("#SendBtn").attr('hidden', false);
    }
  }
  
  // Key up event handler on text box
  $("#chatbox").keyup(function () {
    let message = $("#chatbox").val();
    ShowHideButton(message);
  });
  
  // Send button event handler
  $("#SendBtn").click(function () {
    let message = $("#chatbox").val();
    PlayAssistant(message);
  });
  
  // Enter press event handler on chat box
  $("#chatbox").keypress(function (e) {
    key = e.which;
    if (key == 13) {
      let message = $("#chatbox").val();
      PlayAssistant(message);
    }
  });
});