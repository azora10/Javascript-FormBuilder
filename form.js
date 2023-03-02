let count = 0;
let currentInput = '';
let input = '';
let ghost = '';
let modal = '';
let div = '';
let currentDiv = '';
let onTop = '';
let onBottom = '';
let insertionTarget = '';
let isMoving = false;
let moveClone = '';
let moveReal = '';
let isEdit = false;
let currentInputId = '';
let currentEditId = '';
var insertionCheck = '';
var displayTarget = '';
var moveLabelToPosition = '';
var hoverNextSib = '';
var selectRow = 0;
var radioRow = 0;
var selectRowColumn = 0;
var privilageValuea = [];
var checkFirstSelect = [];
var checkFirstRadio = [];
var privilageValueArea = [];
var newPriVal = ['all'];
var promiseValue = [];
var jsonDoc = [];
var txtBoxValue = [];
var txtRadio = [];
var checkingValues = [];
var selectCheckBoxVal = 'ownVal';
var radioCheckBoxVal = 'ownRadioVal';
 var reloadState=false;
var fileFormName = '';
var buttonTypeName = '';
var buttonStyle = '';
var addrow = 0;
var addColumn = 0;
var jsonData = [];
var editElement = '';
var allInputs = {
    inpTextField: ['textField.html', 'textFieldEle'],
    inpTextArea: ['Textarea.html', 'submitArea'],
    inpNumber: ['numbers.html', 'numberEle'],
    inpPhone: ['phone.html', 'phoneEle'],
    inpSection: ['section.html', 'sectionEle'],
    inpEmail: ['email.html', 'emailEle'],
    inpCheckBox: ['checkbox.html', 'checkBoxEle'],
    inpSelect: ['selectbox.html', 'selectBoxEle'],
    inpRadio: ['radio.html', 'radioEle'],
    inpButton: ['button.html', 'buttonEle'],
    inpImage: ['imageField.html', 'imageFieldEle'],
    inpDocument: ['document.html', 'documentEle'],
    inpTitleBox: ['titlebox.html', 'titleBoxEle'],
    inpDialogue: ['dialogue.html', 'dialogueEle'],
    inpDateAndTime: ['dateandtime.html', 'dateAndTimeEle'],
    inpUrlField: ['url.html', 'urlFieldEle'],
    inpSignature: ['signature.html', 'signatureEle'],
    inpTable: ['table.html', 'tableEle'],
    inpUpload: ['upload.html', 'uploadEle'],
    inpVideo: ['videoembed.html', 'videoembedEle'],
    inpPromise: ['promise.html', 'promiseEle'],



};
var newFn = [];


var componentsSection = [];


var dataComp = [];
var output = [];
var components = [];
var section = {};
var ab = {};

var closeModalId;
var previewCloneId;
var previewCloneNewId = 0;
var fileFormatData = '';

var inpTextCountVal = 0;
var inpTextCopyCountVal = 0;
// Karthi565
var labelPositionId = 0;
var previewChangeNewId = 0;
var labelPositionPreviewId = 0;

var checkPriviVal = true;


// sathik
var radioartix = false;
var radioartixArray = [];
var checkYesNo = true;


var count_sig = 0;
var count_image =0;
var dateEdit =[];


Window.onload = getReloadData();





function getReloadData() {
    // var a = localStorage.getItem('NewJsonFormat');
    // console.log(a);
   
    // handleReloadFileSelect(a);
    var a = localStorage.getItem('NewJsonFormat');
    // console.log('lcaolsdaw',a);
    // console.log('lcaolsdaw',a.length);
    if(a.length > 0){
        handleReloadFileSelect(a);
    }
}

function onDragStart(event) {
    currentInput = event.target;
}

function hoverDemoEnd(event) {
}
function clean(node) {
    for (var n = 0; n < node.childNodes.length; n++) {
        var child = node.childNodes[n];
        if (child.nodeType === 8 || (child.nodeType === 3 && !/\S/.test(child.nodeValue))) {
            node.removeChild(child);
            n--;
        } else if (child.nodeType === 1) {
            clean(child);
        }
    }
}
clean(document);

function onDragOver(event) {
    event.preventDefault();
    var hoverTarget = event.target;
    let lanes = document.querySelectorAll('#topLane , #botLane , #topSectLane, #botSectLane');
    try {
        lanes.forEach((myItem) => {
            myItem.style.visibility = "visible";
        });
    } catch (error) { }

    if (hoverTarget.id == "botLane" || hoverTarget.id == "hoverDemoBot") {
        if (document.querySelector('#hoverDemoTop') || document.querySelector('#hoverDemoSect')) {
            let hoverList = document.querySelectorAll('#hoverDemoTop , #hoverDemoSect');
            hoverList.forEach((myItem) => {
                myItem.innerHTML = "";

            });
        }
        if (document.querySelector('#hoverDemoTopSect')) {
            document.querySelector('#hoverDemoTopSect').remove();
        }
        displayTarget = hoverTarget.querySelector('#hoverDemoBot');

        displayTarget = event.target.parentElement.querySelector('#hoverDemoBot');

        displayTarget.innerHTML = "DROP BOTTOM";
    }

    else if (hoverTarget.id == "topLane" || hoverTarget.id == "hoverDemoTop") {

        if (document.querySelector('#hoverDemoBot') || document.querySelector('#hoverDemoSect')) {
            let hoverList = document.querySelectorAll('#hoverDemoBot , #hoverDemoSect');
            hoverList.forEach((myItem) => {
                myItem.innerHTML = "";
            });
        }
        if (document.querySelector('#hoverDemoTopSect')) {
            document.querySelector('#hoverDemoTopSect').remove();

        }
        displayTarget = event.target.parentElement.querySelector('#hoverDemoTop');
        displayTarget.innerHTML = "DROP TOP";
    }

    else if (hoverTarget.id == "topSectLane") {

        sectHoverParent = hoverTarget.parentElement;
        if (document.querySelector('#hoverDemoBot') || document.querySelector('#hoverDemoTop') || document.querySelector('hoverDemoSect')) {
            const hoverList = document.querySelectorAll('#hoverDemoSect, #hoverDemoBot, #hoverDemoTop');
            hoverList.forEach((myItem) => {
                myItem.innerHTML = "";
            });
        }

        if (!document.querySelector('#hoverDemoTopSect')) {
            temp_sectHover = document.createElement('div');
            temp_sectHover.id = 'hoverDemoTopSect';
            temp_sectHover.className = 'hover-space';
            temp_sectHover.innerHTML = "DROP ABOVE SECTION";
            hoverTarget.parentElement.parentElement.insertBefore(temp_sectHover, hoverTarget.parentElement);
        }


    }
    else if (hoverTarget.id == "hoverDemoTopSect") {
        sectHoverParent = hoverTarget.parentElement;
        if (document.querySelector('#hoverDemoBot') || document.querySelector('#hoverDemoTop') || document.querySelector('#hoverDemoSect')) {
            const hoverList = document.querySelectorAll('#hoverDemoSect,#hoverDemoBot,#hoverDemoTop');
            hoverList.forEach((myItem) => {
                myItem.innerHTML = "";
            });
        }
        if (!document.querySelector('#hoverDemoTopSect')) {
            temp_sectHover = document.createElement('div');
            temp_sectHover.id = 'hoverDemoTopSect';
            temp_sectHover.className = 'hover-space';
            temp_sectHover.innerHTML = "DROP ABOVE SECTION";
            hoverTarget.parentElement.insertBefore(temp_sectHover, hoverTarget);
        }
        hoverNextSib = hoverTarget.nextSibling;
    }

    else if (hoverTarget.id == "hoverDemoSect") {
        if (document.querySelector('#hoverDemoTop')) {
            document.querySelector('#hoverDemoTop').innerHTML = "";
        }
        if (document.querySelector('#hoverDemoBot')) {
            document.querySelector('#hoverDemoBot').innerHTML = "";
        }
        if (document.querySelector('#hoverDemoTopSect')) {
            document.querySelector('#hoverDemoTopSect').remove();

        }


        if (!hoverTarget.hasChildNodes) {
            displayTarget = event.target.parentElement.querySelector('#hoverDemoSect');
        }
    }
    else if (hoverTarget.id == 'botSectLane') {
        try {
            if (document.querySelector('#hoverDemoTop') != "") {
                document.querySelector('#hoverDemoTop').innerHTML = "";
            }
        } catch (error) { }
        try {
            if (document.querySelector('#hoverDemoBot') != "") {
                document.querySelector('#hoverDemoBot').innerHTML = "";
            }
        } catch (error) { }
        try {
            if (document.querySelector('#hoverDemoTopSect')) {
                document.querySelector('#hoverDemoTopSect').remove();
            }
        } catch (error) { }
        displayTarget = event.target.parentElement.querySelector('#hoverDemoSect');
        displayTarget.innerHTML = "DROP INSIDE SECTION";

    }
    else {
        displayTarget.innerHTML = "";
        try {

            if (document.querySelector('#hoverDemoTop') != "") {
                document.querySelector('#hoverDemoTop').innerHTML = "";
            }
        } catch (error) { }

        try {
            if (document.querySelector('#hoverDemoTopSect')) {
                document.querySelector('#hoverDemoTopSect').remove();
            }
        } catch (error) { }

    }

    const hoverList = document.querySelectorAll('#hoverDemoSect,#hoverDemoTop,#hoverDemoBot');
}

function innerMove(event) {
    onDragStart(event);
}
function loadPage(href) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    return xmlhttp.responseText;
}

function moveField(event) {
    moveReal = event.target.parentElement.parentElement;
    moveClone = moveReal.cloneNode(true); //Clone div and children


    isMoving = true;
}

function checkDragDrop(event) {



    if (currentDiv == div) {
    }
    if (currentInput.className == 'filedmainbox') {
        onDrop(event);
    }

}



function onDrop(event) {
    let lanes = document.querySelectorAll('#topLane , #botLane , #topSectLane, #botSectLane');
    try {
        lanes.forEach((myItem) => {
            myItem.style.visibility = "hidden";
        });
    } catch (error) { }
    if (document.querySelector('#hoverDemoTopSect')) {
        document.querySelector('#hoverDemoTopSect').remove();
    }

    previewEle = "";
    const hoverList = document.querySelectorAll('#hoverDemoTop,#hoverDemoSect,#hoverDemoBot');

    hoverList.forEach((myItem) => {
        myItem.innerHTML = "";
    });

    displayTarget.innerHTML = "";
    var InpTargetIsSection = false;
    event.stopPropagation();
    const eventClassList = event.target.id;
    insertionCheck = eventClassList.replace(/[0-9]/g, '');


    if (eventClassList == "botLane" || eventClassList == "hoverDemoBot") {
        if (event.target.parentElement.nextSibling != null) {
            if (event.target.parentElement.nextSibling == 'text') {
            }
            else {
                insertionTarget = event.target.parentElement.nextSibling.querySelector('#topLane');
            }
        }
        else {
            insertionTarget = event.target.parentElement;
            insertionCheck = 'sectionEle';
        }
    }
    else if (eventClassList == "insertedLabel" || eventClassList == "hoverDemoTop") {
        insertionTarget = event.target.parentElement;
    }
    else {
        insertionTarget = event.target;

    }
    //modal popup function
    currentInputId = currentInput.id;
    if ((!isMoving && InpTargetIsSection == false)) {
        for (let i in allInputs) {
            if (currentInputId == i) {
                document.getElementById("dropAreaBox").innerHTML = loadPage(allInputs[i][0]);
                const modal = document.querySelector(".modal");
                modal.classList.toggle("show-modal");
                closeModalId = modal.id;
                previewCloneId = allInputs[i][1];
                currentInputId = previewCloneId;

            }
        }
    }
    else {
        saveModal();
        isMoving = false;
    }




    document.querySelector('#all').checked = "checked";
    var newPriVal = ['all'];



    //sathik
// ondrop signature function

  if (previewCloneId == "signatureEle") {
    (function () {
      window.requestAnimFrame = (function (callback) {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimaitonFrame ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60);
          }
        );
      })();
      //edit NNA
      var canvas = document.getElementById("sig-canvas");
      
      var ctx = canvas.getContext("2d");
      ctx.strokeStyle = "#222222";
      ctx.lineWidth = 4;

      var drawing = false;
      var mousePos = {
        x: 0,
        y: 0,
      };
      var lastPos = mousePos;

      canvas.addEventListener(
        "mousedown",
        function (e) {
          drawing = true;
          lastPos = getMousePos(canvas, e);
        },
        false
      );

      canvas.addEventListener(
        "mouseup",
        function (e) {
          drawing = false;
        },
        false
      );

      canvas.addEventListener(
        "mousemove",
        function (e) {
          mousePos = getMousePos(canvas, e);
        },
        false
      );

      // Add touch event support for mobile
      canvas.addEventListener("touchstart", function (e) {}, false);

      canvas.addEventListener(
        "touchmove",
        function (e) {
          var touch = e.touches[0];
          var me = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY,
          });
          canvas.dispatchEvent(me);
        },
        false
      );

      canvas.addEventListener(
        "touchstart",
        function (e) {
          mousePos = getTouchPos(canvas, e);
          var touch = e.touches[0];
          var me = new MouseEvent("mousedown", {
            clientX: touch.clientX,
            clientY: touch.clientY,
          });
          canvas.dispatchEvent(me);
        },
        false
      );

      canvas.addEventListener(
        "touchend",
        function (e) {
          var me = new MouseEvent("mouseup", {});
          canvas.dispatchEvent(me);
        },
        false
      );

      function getMousePos(canvasDom, mouseEvent) {
        var rect = canvasDom.getBoundingClientRect();
        return {
          x: mouseEvent.clientX - rect.left,
          y: mouseEvent.clientY - rect.top,
        };
      }

      function getTouchPos(canvasDom, touchEvent) {
        var rect = canvasDom.getBoundingClientRect();
        return {
          x: touchEvent.touches[0].clientX - rect.left,
          y: touchEvent.touches[0].clientY - rect.top,
        };
      }

      function renderCanvas() {
        if (drawing) {
          ctx.moveTo(lastPos.x, lastPos.y);
          ctx.lineTo(mousePos.x, mousePos.y);
          ctx.stroke();
          lastPos = mousePos;
        }
      }

      // Prevent scrolling when touching the canvas
      document.body.addEventListener(
        "touchstart",
        function (e) {
          if (e.target == canvas) {
            e.preventDefault();
          }
        },
        false
      );
      document.body.addEventListener(
        "touchend",
        function (e) {
          if (e.target == canvas) {
            e.preventDefault();
          }
        },
        false
      );
      document.body.addEventListener(
        "touchmove",
        function (e) {
          if (e.target == canvas) {
            e.preventDefault();
          }
        },
        false
      );

      (function drawLoop() {
        requestAnimFrame(drawLoop);
        renderCanvas();
      })();

      function clearCanvas() {
        canvas.width = canvas.width;
      }

      // Set up the UI
      var sigText = document.getElementById("sig-dataUrl");
      // console.log('sigText', sigText);
      var sigImage = document.getElementById("sig-image");
      // console.log('sigImage', sigImage);

      var clearBtn = document.getElementById("sig-clearBtn");
      var submitBtn = document.getElementById("sig-submitBtn");
      clearBtn.addEventListener(
        "click",
        function (e) {
          clearCanvas();
          sigText.innerHTML = "Data URL for your signature will go here!";
          sigImage.setAttribute("src", "");
        },
        false
      );
      submitBtn.addEventListener(
        "click",
        function (e) {
          var dataUrl = canvas.toDataURL();
          sigText.innerHTML = dataUrl;
          sigImage.setAttribute("src", dataUrl);
        },
        false
      );
    })();
  }

}

function appendElements(previewEle) {

    insertionParent = insertionTarget.parentElement;

    if (insertionCheck == 'topSectLane') {
        insertionTarget.parentElement.parentElement.insertBefore(previewEle, insertionTarget.parentElement);
    }
    else if (insertionCheck == 'insertedSectionLabel') {
        insertionTarget.parentElement.parentElement.parentElement.insertBefore(previewEle, insertionTarget.parentElement.parentElement);
    }
    else if (insertionCheck == 'hoverDemoTopSect') {
        hoverNextSib.parentElement.insertBefore(previewEle, hoverNextSib);
    }
    else if (insertionCheck == 'hoverDemoSect') {
        insertionTarget.parentElement.appendChild(previewEle);
    }
    else if (insertionCheck == 'botSectLane') {
        insertionTarget.parentElement.querySelector('#sectData').appendChild(previewEle);

        insertionTarget.parentElement.querySelector('#topSectLane').style.height = '15%';

    }
    else if (insertionCheck == 'parentDropAreaBox') {
        insertionTarget.appendChild(previewEle);
    }
    else if (insertionTarget.id == 'topLane') {
        insertionTarget.parentElement.parentElement.insertBefore(previewEle, insertionTarget.parentElement);

    }
    else if (insertionTarget.id == 'botLane') {
        insertionTarget.parentElement.insertBefore(previewEle, insertionTarget);
    }
    else {
        insertionTarget.parentElement.appendChild(previewEle);
    }
    insertionTarget = '';
    if (isMoving) {
        moveReal.remove();
    }


}



// close modal function
function closeModal() {
    isEdit = false;
    isMoving = false;
    var element = document.getElementById(closeModalId);
    element.classList.add("mystyle");
}




// save each modal to sections
function saveModal() {
    displayTarget.innerHTML = "";



              
         


    if (isMoving) {
        var previewEle = moveClone;
        // console.log('my clone moved ', moveClone);
        appendElements(previewEle);
    }
    else if (isEdit) {
        console.log('currentEditId ', currentEditId);
        console.log(currentEditId.querySelector('#insertedInput'));

        try {
            console.log('EditLabel saved...');
            if (moveLabelToPosition == 'bottom') {
                previewEle.querySelector('#insertedData').style.flexDirection = 'column-reverse';
            }
            else {
                previewEle.querySelector('#insertedData').style.flexDirection = 'column';
            }
        } catch (error) { }
        try {
            currentEditId.querySelector('#insertedImage').src = document.getElementById('imagePreview').src;
            // alert('hello')
        } catch (error) { }


        // karthika-signature
        try {
            currentEditId.querySelector('#insertedInput') = document.getElementById('sig-canvas-img').src;

        } catch (error) { }

   
        //karthika-embed video
        try {
            currentEditId.querySelector('#insertedInput').src = document.getElementById('myFrame').src;

        } catch (error) { }
        //karthika-table
        try {
            currentEditId.querySelector('#insertedInput').innerHTML = document.getElementById('wrap').innerHTML;

        } catch (error) { }
  
        //karthika-document
        try {
            currentEditId.querySelector('#insertedDocument').src = document.getElementById('output').src;

        } catch (error) { }

    //karthika-date and ime
    // try {
    //     alert('save')
    //     currentEditId.querySelector('#insertedInput').value = document.getElementsByClassName('previewField')[0].querySelector('.form-control').type;

    // } catch (error) { }
        try {

            currentEditId.querySelector('label').innerHTML = document.getElementsByClassName('previewField')[0].querySelector('label').innerHTML;
        } catch (error) { }
        try {
            // alert('textarea')
            currentEditId.querySelector('#insertedInput').placeholder = document.getElementsByClassName('previewField')[0].querySelector('.form-control').placeholder;
        } catch (error) { }
        //karthika-promise
        try {
            currentEditId.querySelector('#insertedInput').value = document.getElementsByClassName('previewField')[0].querySelector('.form-control').value;

        } catch (error) { }
    
        //karthika-button
        try {
            currentEditId.querySelector('#insertedButton').value = document.getElementById('buttonBox2').value;

        } catch (error) { }


        try {
            if (currentEditId.id.replace(/[0-9]/g, '') == 'documentEle') {
                currentEditId.querySelector('#insertedInput').accept = document.querySelector('#fileInput').accept;
            }
        } catch (error) { }

        try {
            if (currentEditId.id.replace(/[0-9]/g, '') == 'buttonEle') {
                currentEditId.querySelector('#insertedButton').type = document.querySelector('#buttonBox2').type;
            }
        } catch (error) { }

        try {
            if (currentEditId.id.replace(/[0-9]/g, '') == 'radioEle') {
                let editOptions = currentEditId.querySelector('#insertedInput');
                let currentEditRadio = currentEditId.querySelector('#insertedInput');
                let currentInsId = document.querySelector('#previewRadio');
                let currentInsClass = currentInsId.querySelectorAll('.previewRadioEle');
                currentInsClass.forEach((myItem) => {
                    myItem.className = 'insertedRadioEle';
                });
                let radioName = document.getElementById('radioBox1').value;
                try {
                    currentInsClass.forEach((myItem) => {
                        myItem.name = radioName;
                        if (myItem.value == 'on') {
                            myItem.value = myItem.nextElementSibling.innerHTML;
                        }
                    });
                } catch (error) { }

                currentEditRadio.parentElement.replaceChild(currentInsId, currentEditRadio);
                currentEditId.querySelector('#previewRadio').id = 'insertedInput';
            }
            else {
                console.log('Select edit save...');
                let editOptions = currentEditId.querySelector('select').querySelectorAll('option');
                let currentEditSelect = currentEditId.querySelector('select');
                let currentInsId = document.querySelector('#previewSelect');
                currentEditSelect.parentElement.replaceChild(currentInsId, currentEditSelect);
                currentEditId.querySelector('#previewSelect').id = 'insertedInput';

            }
        } catch (error) { }

        isEdit = false;

    }
    else {
        if (previewCloneId == 'radioEle') {
            let currentRad = document.querySelectorAll('.previewRadioEle');
            try {
                let radioName = document.getElementById('radioBox1').value;
                try {
                    currentRad.forEach((myItem) => {
                        myItem.name = radioName;
                        if (myItem.value == 'on') {
                            myItem.value = myItem.nextElementSibling.innerHTML;
                        }
                    });
                } catch (error) { }
            } catch (error) { }

            currentRad.forEach((myItem) => {
                myItem.className = 'insertedRadioEle';
            });
        }
        var previewEle = document.getElementById(previewCloneId).cloneNode(true);
        previewEle.id = currentInputId + previewCloneNewId;
        if (currentInputId == 'sectionEle') {
            previewEle.className = 'section-box field-card';
        } else {
            previewEle.className = 'form-box field-card';



        }


        if (previewCloneId == 'imageFieldEle') {
            previewEle.querySelector('#imagePreview').id = 'insertedImage';
            temp_top = document.createElement('div');
            temp_top.id = 'topLane';
            previewEle.appendChild(temp_top);

            temp_bot = document.createElement('div');
            temp_bot.id = 'botLane';
            previewEle.appendChild(temp_bot);
        }

        //karthika-video
        if (previewCloneId == 'videoembedEle') {
            previewEle.querySelector('#myFrame').id = 'insertedVideo';
            temp_top = document.createElement('div');
            temp_top.id = 'topLane';
            previewEle.appendChild(temp_top);

            temp_bot = document.createElement('div');
            temp_bot.id = 'botLane';
            previewEle.appendChild(temp_bot);
        }
        //karthika-table
        if (previewCloneId == 'tableEle') {
            previewEle.querySelector('#wrap').id = 'insertedTable';
            temp_top = document.createElement('div');
            temp_top.id = 'topLane';
            previewEle.appendChild(temp_top);

            temp_bot = document.createElement('div');
            temp_bot.id = 'botLane';
            previewEle.appendChild(temp_bot);
        }
        //karthika-document
        if (previewCloneId == 'documentEle') {
            previewEle.querySelector('#fileInput').id = 'insertedInput';
            previewEle.querySelector('#output').id = 'insertedDocument';
            temp_top = document.createElement('div');
            temp_top.id = 'topLane';
            previewEle.appendChild(temp_top);

            temp_bot = document.createElement('div');
            temp_bot.id = 'botLane';
            previewEle.appendChild(temp_bot);
        }

        if (previewCloneId == 'buttonEle') {
            previewEle.querySelector('#buttonBox2').id = 'insertedButton';
            temp_top = document.createElement('div');
            temp_top.id = 'topLane';
            previewEle.appendChild(temp_top);

            temp_bot = document.createElement('div');
            temp_bot.id = 'botLane';
            previewEle.appendChild(temp_bot);

        }

        if (previewEle.querySelector('.requiredField') != null) {
            previewEle.querySelector('.d-flex').id = 'insertedLabel';
            previewEle.querySelector('.requiredField').id = 'insertedInput';
            try{
                if(previewCloneId == 'imageFieldEle'){

                 
                    previewEle.querySelector('.requiredField').id = 'insertedImage';

                }




            }catch(error){}
            try {
                previewEle.querySelector('#tooltipSecond').id = 'insertedTooltip';
            } catch (error) {

            }
            previewEle.querySelector('#previewData').id = 'insertedData';
            if (moveLabelToPosition == 'bottom') {
                previewEle.querySelector('#insertedData').style.flexDirection = 'column-reverse';
            }
            else {
                previewEle.querySelector('#insertedData').style.flexDirection = 'column';
            }

            temp_top = document.createElement('div');
            temp_top.id = 'topLane';
            previewEle.appendChild(temp_top);

            temp_bot = document.createElement('div');
            temp_bot.id = 'botLane';
            previewEle.appendChild(temp_bot);



        }
        //azar
        else if (previewEle.querySelector('#sectionBox2') != null) {
            temp_top = document.createElement('div');
            temp_top.id = 'topSectLane';
            previewEle.appendChild(temp_top);

            temp_bot = document.createElement('div');
            temp_bot.id = 'botSectLane';
            previewEle.appendChild(temp_bot);

            // console.log('sectionBox2 Checker');
            previewEle.querySelector('.sectionTitle').parentElement.style.border = '1px dashed #999';
            previewEle.querySelector('.sectionTitle').parentElement.style.padding = '10px';
            previewEle.querySelector('.sectionTitle').parentElement.style.top = '25px';

            previewEle.querySelector('.sectionTitle').id = 'insertedSection';
            previewEle.querySelector('#sectionBox2').id = 'insertedSectionLabel';
            previewEle.querySelector('#previewData').id = 'sectData';



        }

        appendElements(previewEle);


        if (checkPriviVal) {
            privilageValuea[previewCloneNewId] = ['all'];
        }


        if (checkYesNo) {
            radioartixArray[previewCloneNewId] = false;
        }previewCloneId


    try {
        var parent = document.getElementById("signatureEle" + previewCloneNewId);
        var sigImage1 = parent.querySelector("#insertedInput");
        sigImage1.id = "insertedInput" + (count_sig + 1);
      } catch {}



        previewCloneNewId += 1;

        newPriVal = ['all'];
        checkPriviVal = true;

    }
    closeModal();


    if (previewCloneId == "signatureEle") {
        (function () {
          window.requestAnimFrame = (function (callback) {
            return (
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              window.msRequestAnimaitonFrame ||
              function (callback) {
                window.setTimeout(callback, 1000 / 60);
              }
            );
          })();
          //preview NNA
    
          var canvas1 = document.getElementById("sig-canvas");
          
          count_sig += 1;
          canvas1.id = "sig-canvas" + count_sig;
          //   var canvas = document.getElementById("sig-canvas");
          //   var canvas = document.querySelectorAll("#sig-canvas");
        //   console.log(canvas1, "niiie");
          var canvas = document.getElementById("sig-canvas" + count_sig);
          var ctx = canvas.getContext("2d");
          ctx.strokeStyle = "#222222";
          ctx.lineWidth = 4;
          var drawing = false;
          var mousePos = {
            x: 0,
            y: 0,
          };
          var lastPos = mousePos;
    
          canvas.addEventListener(
            "mousedown",
            function (e) {
              drawing = true;
              lastPos = getMousePos(canvas, e);
            },
            false
          );
    
          canvas.addEventListener(
            "mouseup",
            function (e) {
              drawing = false;
            },
            false
          );
    
          canvas.addEventListener(
            "mousemove",
            function (e) {
              mousePos = getMousePos(canvas, e);
            },
            false
          );
    
          // Add touch event support for mobile
          canvas.addEventListener("touchstart", function (e) {}, false);
    
          canvas.addEventListener(
            "touchmove",
            function (e) {
              var touch = e.touches[0];
              var me = new MouseEvent("mousemove", {
                clientX: touch.clientX,
                clientY: touch.clientY,
              });
              canvas.dispatchEvent(me);
            },
            false
          );
    
          canvas.addEventListener(
            "touchstart",
            function (e) {
              mousePos = getTouchPos(canvas, e);
              var touch = e.touches[0];
              var me = new MouseEvent("mousedown", {
                clientX: touch.clientX,
                clientY: touch.clientY,
              });
              canvas.dispatchEvent(me);
            },
            false
          );
    
          canvas.addEventListener(
            "touchend",
            function (e) {
              var me = new MouseEvent("mouseup", {});
              canvas.dispatchEvent(me);
            },
            false
          );
    
          function getMousePos(canvasDom, mouseEvent) {
            var rect = canvasDom.getBoundingClientRect();
            return {
              x: mouseEvent.clientX - rect.left,
              y: mouseEvent.clientY - rect.top,
            };
          }
    
          function getTouchPos(canvasDom, touchEvent) {
            var rect = canvasDom.getBoundingClientRect();
            return {
              x: touchEvent.touches[0].clientX - rect.left,
              y: touchEvent.touches[0].clientY - rect.top,
            };
          }
    
          function renderCanvas() {
            if (drawing) {
              ctx.moveTo(lastPos.x, lastPos.y);
              ctx.lineTo(mousePos.x, mousePos.y);
              ctx.stroke();
              lastPos = mousePos;
            }
          }
    
          // Prevent scrolling when touching the canvas
          document.body.addEventListener(
            "touchstart",
            function (e) {
              if (e.target == canvas) {
                e.preventDefault();
              }
            },
            false
          );
          document.body.addEventListener(
            "touchend",
            function (e) {
              if (e.target == canvas) {
                e.preventDefault();
              }
            },
            false
          );
          document.body.addEventListener(
            "touchmove",
            function (e) {
              if (e.target == canvas) {
                e.preventDefault();
              }
            },
            false
          );
    
          (function drawLoop() {
            requestAnimFrame(drawLoop);
            renderCanvas();
          })();
    
          function clearCanvas() {
            canvas.width = canvas.width;
          }
    
          // Set up the UI
          var sigText1 = document.getElementById("sig-dataUrl");
          sigText1.id = "sig-dataUrl" + count_sig;
          var sigText = document.getElementById("sig-dataUrl" + count_sig);
          // console.log('sigText', sigText);

          var sigImage = document.getElementById("insertedInput" + count_sig);
          var clearBtn1 = document.getElementById("sig-clearBtn");
          clearBtn1.id = "sig-clearBtn" + count_sig;
          var clearBtn = document.getElementById("sig-clearBtn" + count_sig);
          var submitBtn1 = document.getElementById("sig-submitBtn");
          submitBtn1.id = "sig-submitBtn" + count_sig;
          var submitBtn = document.getElementById("sig-submitBtn" + count_sig);
          clearBtn.addEventListener(
            "click",
            function (e) {
              clearCanvas();
              sigText.innerHTML = "Data URL for your signature will go here!";
              sigImage.setAttribute("src", "");
            },
            false
          );
          submitBtn.addEventListener(   
            "click",
            function (e) {
              var dataUrl = canvas.toDataURL();
              sigText.innerHTML = dataUrl;
              sigImage.setAttribute("src", dataUrl);
            },
            false
          );

          try{
            document.getElementById("insertedInput" + count_sig).style.visibility = "hidden";
          }catch{}
          
        })();
      }
    
      if(previewCloneId == "imageFieldEle"){
   

        var placeHolderImage =document.getElementById("setFile");
        placeHolderImage.addEventListener(
            "change",
            function(event){
              
                    count_image +=1;
                var reader = new FileReader();
                reader.onload = function () {
                var output = document.getElementById("insertedImage");
        
                output.src = reader.result;
               
            };
            reader.readAsDataURL(event.target.files[0]);
        
        
       
        
            }
        )
        
       
        
          }

        //   if(previewCloneId == "dateAndTimeEle"){
        //     alert('done');
        //     var saveTeast=document.getElementById("dt")
        //     saveTeast.addEventListener(
        //         "change",
        //         function(event){
        //             alert('yes')
        //         })

        //   }


}



function hoverDemo(event) {
}



function editField(event) {
    isEdit = true;
    var editElement = event.target.parentElement.parentElement;

    // Open Modal
    var currentInputId = editElement.id;
    currentEditId = event.target.parentElement.parentElement;
    currentEditIdChecker = currentEditId.id.replace(/[0-9]/g, '');
    for (let i in allInputs) {
        if (currentEditIdChecker == allInputs[i][1]) {
            document.getElementById("dropAreaBox").innerHTML = loadPage(allInputs[i][0]);
            const modal = document.querySelector(".modal");
            modal.classList.toggle("show-modal");
            closeModalId = modal.id;
        }
    }

    let previewDataBox = document.querySelector('#previewData');
    let editFormFieldBox = document.querySelector('.editFormField');

    var newMulticheckbox = document.querySelector('.multicheckbox');
    var matches = currentEditId.id.match(/(\d+)/);
    newPriVal = privilageValuea[matches[0]];
    var newVal = privilageValuea[matches[0]];

    //karthika-signature
    try {
        if (currentEditIdChecker == 'signatureEle') {

  // editfield signature function

  try {
    if (currentEditIdChecker == "signatureEle") {
      (function () {
        window.requestAnimFrame = (function (callback) {
          return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimaitonFrame ||
            function (callback) {
              window.setTimeout(callback, 1000 / 60);
            }
          );
        })();
        // sathik1
        var existingImg = document.getElementById("sig-image");
        var img = currentEditId.querySelectorAll("img");
        existingImg.src = img[0].src;
        var canvas = document.getElementById("sig-canvas");
        var ctx = canvas.getContext("2d");
        ctx.strokeStyle = "#222222";
        ctx.lineWidth = 4;

        var drawing = false;
        var mousePos = {
          x: 0,
          y: 0,
        };
        var lastPos = mousePos;

        canvas.addEventListener(
          "mousedown",
          function (e) {
            drawing = true;
            lastPos = getMousePos(canvas, e);
          },
          false
        );

        canvas.addEventListener(
          "mouseup",
          function (e) {
            drawing = false;
          },
          false
        );

        canvas.addEventListener(
          "mousemove",
          function (e) {
            mousePos = getMousePos(canvas, e);
          },
          false
        );

        // Add touch event support for mobile
        canvas.addEventListener("touchstart", function (e) {}, false);

        canvas.addEventListener(
          "touchmove",
          function (e) {
            var touch = e.touches[0];
            var me = new MouseEvent("mousemove", {
              clientX: touch.clientX,
              clientY: touch.clientY,
            });
            canvas.dispatchEvent(me);
          },
          false
        );

        canvas.addEventListener(
          "touchstart",
          function (e) {
            mousePos = getTouchPos(canvas, e);
            var touch = e.touches[0];
            var me = new MouseEvent("mousedown", {
              clientX: touch.clientX,
              clientY: touch.clientY,
            });
            canvas.dispatchEvent(me);
          },
          false
        );

        canvas.addEventListener(
          "touchend",
          function (e) {
            var me = new MouseEvent("mouseup", {});
            canvas.dispatchEvent(me);
          },
          false
        );

        function getMousePos(canvasDom, mouseEvent) {
          var rect = canvasDom.getBoundingClientRect();
          return {
            x: mouseEvent.clientX - rect.left,
            y: mouseEvent.clientY - rect.top,
          };
        }

        function getTouchPos(canvasDom, touchEvent) {
          var rect = canvasDom.getBoundingClientRect();
          return {
            x: touchEvent.touches[0].clientX - rect.left,
            y: touchEvent.touches[0].clientY - rect.top,
          };
        }

        function renderCanvas() {
          if (drawing) {
            ctx.moveTo(lastPos.x, lastPos.y);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.stroke();
            lastPos = mousePos;
          }
        }

        // Prevent scrolling when touching the canvas
        document.body.addEventListener(
          "touchstart",
          function (e) {
            if (e.target == canvas) {
              e.preventDefault();
            }
          },
          false
        );
        document.body.addEventListener(
          "touchend",
          function (e) {
            if (e.target == canvas) {
              e.preventDefault();
            }
          },
          false
        );
        document.body.addEventListener(
          "touchmove",
          function (e) {
            if (e.target == canvas) {
              e.preventDefault();
            }
          },
          false
        );

        (function drawLoop() {
          requestAnimFrame(drawLoop);
          renderCanvas();
        })();

        function clearCanvas() {
          canvas.width = canvas.width;
        }

        // Set up the UI
        var sigText = document.getElementById("sig-dataUrl");
        // console.log('sigText', sigText);
        var sigImage = document.getElementById("sig-image");
        // console.log('sigImage', sigImage);

        var clearBtn = document.getElementById("sig-clearBtn");
        var submitBtn = document.getElementById("sig-submitBtn");
        clearBtn.addEventListener(
          "click",
          function (e) {
            clearCanvas();
            sigText.innerHTML = "Data URL for your signature will go here!";
            sigImage.setAttribute("src", "");
          },
          false
        );
        submitBtn.addEventListener(
          "click",
          function (e) {
            var dataUrl = canvas.toDataURL();
            sigText.innerHTML = dataUrl;
            sigImage.setAttribute("src", dataUrl);
            //sathik
            let prevEditSignature = document.querySelectorAll("#sig-image");
            // localStorage.setItem("imgSrc", prevEditSignature[0].src);
            var img = currentEditId.querySelectorAll("img");
            img[0].src = prevEditSignature[0].src;
          },
          false
        );
      })();
      var img = currentEditId.querySelectorAll("img");
      img[0].src = savedImgSrc;
    }
  } catch (error) {}


            
            let editSignature = currentEditId.querySelector('#insertedInput');
            let prevEditSignature = document.getElementById('sig-canvas-img');
            
            prevEditSignature.src = editSignature.src;

        }
    } catch (error) { }

    //karthika-button
    try {
        if (currentEditIdChecker == 'buttonEle') {
            let editBtn = currentEditId.querySelector('#insertedButton');
            let prevBtn = document.getElementById('buttonBox2');
            prevBtn.value = editBtn.value;
            let editButtonType = editFormFieldBox.querySelector('.labelsInput').querySelector('input').value = editBtn.value;
            let editPriviVal = editFormFieldBox.querySelector('.multicheckbox').querySelector('input').value;
            editPriviVal.style = 'checked';

        }
    }
    catch (error) { }

    try {
        if (currentEditIdChecker == 'imageFieldEle') {
           
                let editImage = currentEditId.querySelector('#insertedImage');
                let prevEditImg = document.getElementById('imagePreview');
                prevEditImg.src = editImage.src;

        }
    } catch (error) { }
    //karthika-document
    try {
        if (currentEditIdChecker == 'documentEle') {
            let editDocument = currentEditId.querySelector('#insertedInput');
            let oldEdit = document.querySelector('#fileInput');

        }
    } catch (error) { }




    try {
        if (currentEditIdChecker == 'radioEle') {

            let editSecOpt = currentEditId.querySelectorAll('.insertedRadioEle');
            let modalRow = document.querySelector('#buttonRow');
            let previewRow = document.querySelector('#previewRadio');

            editSecOpt.forEach(element => {
                let newElementId = element.id.replace('radioPrevRow', 'radioRow');
                let tempRow = `<tr id="` + newElementId + `">
                <td><input id="radioLabel" onkeyup="PlaceHolderRadioLabel(event)" type='text' placeholder="Label" value="` + element.nextElementSibling.innerHTML + `"></td>
                <td><button class="removeField-button" onclick="deleteRadioRow(event)">x</button></td>`;
                modalRow.insertAdjacentHTML('beforebegin', tempRow);
                let editRowTemp = document.createElement('input');
                editRowTemp.type = 'radio';
                editRowTemp.id = element.id;
                editRowTemp.value = element.value;
                editRowTemp.name = document.getElementById('radioBox1').value;
                editRowTemp.className = 'previewRadioEle';


                document.getElementById('previewRadio').appendChild(editRowTemp);
                var editRowLabel = document.createElement('label');
                editRowLabel.id = element.nextElementSibling.id;
                editRowLabel.innerHTML = element.nextElementSibling.innerHTML;
                document.getElementById('previewRadio').appendChild(editRowLabel);
                editFormFieldBox.querySelector('.radioCheck').querySelector('textarea').innerHTML = txtRadio;

            });
        }
    } catch (error) { }




    try {
        if (editElement.querySelector('select')) {

            if (checkFirstSelect[matches[0]] == 'ownVal') {
                document.getElementById('makeMyOwn').checked = true;

                document.getElementById("addAnother").style.display = "block";
                document.getElementById("addAnotherOne").style.display = "none";


            }

            if (checkFirstSelect[matches[0]] == 'listVal') {
                document.getElementById('selectFromList').checked = true;
                document.getElementById("addAnother").style.display = "none";
                document.getElementById("addAnotherOne").style.display = "block";


            }

            let editSecOpt = currentEditId.querySelectorAll('option');
            console.log('editSecOpt',editSecOpt)
            let modalRow = document.querySelector('#buttonRow');
            console.log('modalRow',modalRow)
            let previewRow = document.querySelector('#previewSelect');
            console.log('previewRow',previewRow)
            editSecOpt.forEach(element => {
                let newElementId = element.id.replace('previewRow', 'selectRow');
                console.log('newElementId',newElementId)
                let tempRow = `<tr id="` + newElementId + `">
                <td><input class="form-control" id="selectLabel" onkeyup="PlaceHolderSelectLabel(event)" type='text' placeholder="Label" value="` + element.innerHTML + `"></td>
                <td><button class="removeField-button" onclick="deleteRow(event)">x</button></td>
                </tr>`;
                console.log('tempRow',tempRow)
                var modal = modalRow.insertAdjacentHTML('beforebegin', tempRow);
                console.log('modal',modal)
                let editRowTemp = document.createElement('option');
                console.log('editRowTemp',editRowTemp)
                editRowTemp.id = element.id;
                console.log('editRowTemp.id ',editRowTemp.id )
                editRowTemp.innerHTML = element.innerHTML;
                console.log('editRowTemp.innerHTML',editRowTemp.innerHTML)
                editRowTemp.value = element.value;
                console.log('editRowTemp.value ',editRowTemp.value )
                document.getElementById('previewSelect').appendChild(editRowTemp);
                editFormFieldBox.querySelector('.selectText').querySelector('textarea').innerHTML = txtBoxValue;
            });
        }
    } catch (error) { }


    if (editElement.querySelector('label').innerHTML == '') {
        labelNo();
        document.querySelector('.labelExistRadio').querySelector('#labelNo').checked = true;
    }


    if (editElement.querySelector('label').innerHTML != '') {
        let element_label = editElement.querySelector('label').innerHTML.split('<');

        try {
            let element_tooltip = editElement.querySelector('#insertedTooltip').innerHTML;
        } catch (error) { }


        
       //changing code testuser
        element_label = element_label[0];
        let lenofarr = radioartixArray.length
        // if (radioartixArray[lenofarr - 1] == true){

        if (editElement.querySelector("#prevYesNo").style.display != "none") {
    
           document.getElementById('requiredYes').checked = true;
            previewDataBox.querySelector('label').innerHTML = element_label +  '<sup id="prevYesNo">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help To Add To Text Field</span></i>';
        }
        else{


            previewDataBox.querySelector('label').innerHTML = element_label +  '<sup id="prevYesNo" style="display: none;">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help To Add To Text Field</span></i>';
        }

        editFormFieldBox.querySelector('.labelInput').querySelector('input').value = element_label;
        try {
            previewDataBox.querySelector('label').querySelector('span').innerHTML = element_tooltip;

            editFormFieldBox.querySelector('.tooltipInput').querySelector('input').value = element_tooltip;

        } catch (error) { }



    }
    try {
        if (editElement.querySelector('textarea') != null) {
            let element_input = editElement.querySelector('textarea');
            editFormFieldBox.querySelector('.placeholderInput').querySelector('input').value = element_input.placeholder;
            previewDataBox.querySelector('textarea').placeholder = element_input.placeholder;

        }
    } catch (error) { }
    //karthika-promise
    try {
        if (editElement.querySelector('textarea') != null) {
            let element_input = editElement.querySelector('textarea');
            editFormFieldBox.querySelector('.placeholderInput').querySelector('textarea').value = element_input.value;
            previewDataBox.querySelector('textarea').value = element_input.value;

            populateLabePromiseBox();


        }
    } catch (error) { }
    try {
        if (editElement.querySelector('input')) {
            let element_input = editElement.querySelector('input');
            console.log('element_input',element_input)
            editFormFieldBox.querySelector('.placeholderInput').querySelector('input').value = element_input.placeholder;
            console.log('edit',element_input.placeholder)
            previewDataBox.querySelector('input').placeholder = element_input.placeholder;
            console.log('previewDataBox',element_input.placeholder)

        }
    } catch (error) { }

    try{
        if(editElement.querySelector('input')){
            let element_input = editElement.querySelector('input');
            console.log('element_input',element_input)
            getData= document.getElementById('chooseOne')
            console.log('getData',getData)
            prevData=document.getElementById("dt").value;
            console.log('prevData',prevData)
            editFormFieldBox.querySelector('.placeholderInput').querySelectorAll('option').value =element_input.type;
            console.log('element_input.type',element_input.type)
            // dateTest(etype);
            // alert(dateTest(etype))
            previewDataBox.querySelector('input').type=element_input.type;
            console.log('type',element_input.type)


        }

    }catch(error){}

    try {
        if (editElement.querySelector('iframe')) {
            let element_input = editElement.querySelector('iframe');
            let editVideo = currentEditId.querySelector('#insertedInput');
            let prevEditVideo = document.getElementById('myFrame');
            prevEditVideo.src = editVideo.src;
            prevEditVideo.style.width = editVideo.style.width;
            prevEditVideo.style.height = editVideo.style.height;
            let editVideoUrl = editFormFieldBox.querySelector('.labelsInput').querySelector('input').value = element_input.src;

            let editStyle = editFormFieldBox.querySelector('.placeholderInput').querySelector('input').placeholder = element_input.style.width;
            let editHeightStyle = editFormFieldBox.querySelector('.placeholderHeightInput').querySelector('input').placeholder = element_input.style.height;
            let editName = editFormFieldBox.querySelector('.labelInput').querySelector('input').value = previewDataBox.querySelector('previewData').querySelector('label').value;


        }

    } catch (error) { }



    //karthika-table
    try {
        if (editElement.querySelector('samp')) {
            let element_input = editElement.querySelector('samp');
            let edittable = currentEditId.querySelector('#insertedInput').innerHTML = element_input.innerHTML;
            let edittableTR = currentEditId.querySelector('#insertedInput').querySelectorAll('tr').length;
            let edittableTD = currentEditId.querySelector('#insertedInput').querySelector('tr').querySelectorAll('td').length;
            let prevTable = document.getElementById('wrap').innerHTML = element_input.innerHTML;
            let tableRow = document.getElementById('row');
            let tableColumn = document.getElementById('column');
            tableRow.value = edittableTR;
            tableColumn.value = edittableTD;
            edittable.innerHTML = prevTable.innerHTML;

        }

    } catch (error) { }


    for (let i = 0; i < newVal.length; i++) {
        var newMCItem = newMulticheckbox.querySelector('#' + newVal[i]);
        newMCItem.checked = "checked";
    }

}

function selectButtonType(btype) {
    let val = btype.value;
    if (val == 'Button') {
        document.getElementById('buttonBox2').type = "button";
    } else if (val == 'Submit') {
        document.getElementById('buttonBox2').type = "submit";
    } else if (val == 'Reset') {
        document.getElementById('buttonBox2').type = "reset";
    } else if (val == 'Hidden') {
        document.getElementById('buttonBox2').type = "hidden";
    }


}

function selectDateType(dtype) {
    let val = dtype.value;
    console.log('tst',val)
    if (val == 'Date') {
        document.getElementById('dt').type = "date";

    }
    else if (val == 'Time') {
        document.getElementById('dt').type = "time";

    }
    else if (val = 'Date And Time') {
        document.getElementById('dt').type = "datetime-local";

    }

}
    function dateTest(dtype){
    testing= document.getElementById('dt').value;
   

    console.log('testing',testing)
}



// select box radio -second
function checkBoxSelect() {wField
    document.getElementById("addAnother").style.display = "none";
    document.getElementById("addAnotherOne").style.display = "block";
    selectCheckBoxVal = 'listVal';
    checkFirstSelect[previewCloneNewId] = 'listVal';


}
//first

function checkBoxSelectOne() {
    document.getElementById("addAnother").style.display = "block";
    document.getElementById("addAnotherOne").style.display = "none";
    selectCheckBoxVal = 'ownVal';
    checkFirstSelect[previewCloneNewId] = 'ownVal';

}


// radio component radio
function checkBoxSelectRadio() {

    document.getElementById("addAnotherRadio").style.display = "none";
    document.getElementById("addAnotherOneRadio").style.display = "block";
    radioCheckBoxVal = 'listRadioVal';
    checkFirstRadio[previewCloneId] = 'listRadioVal';


}

function checkBoxSelectOneRadio() {
    document.getElementById("addAnotherRadio").style.display = "block";
    document.getElementById("addAnotherOneRadio").style.display = "none";
    radioCheckBoxVal = 'ownRadioVal';
    checkFirstRadio[previewCloneId] = 'ownRadioVal';


}
function requiredYes() {
    document.querySelector('.previewBox').querySelector('sup').required = true;
    // alert('yes')
    document.getElementsByClassName('previewField')[0].querySelector('sup').style.display = 'inline-block';
    // alert('2nd yes')

     radioartix = false;
    //  alert(radioartix)

    radioartixArray[previewCloneNewId] = true;
    // alert(radioartixArray[previewCloneNewId])
    checkYesNo = false;

}


function requiredNo() {
    document.querySelector('.previewBox').querySelector('sup').required = false;
    // alert('no')
    document.getElementsByClassName('previewField')[0].querySelector('sup').style.display = 'none';
    // alert('2nd no')

     radioartix = false;
    //  alert(radioartix)

    radioartixArray[previewCloneNewId] = false;
    // alert(radioartixArray[previewCloneNewId])
     checkYesNo = true;

}


function getAjaxDataRad() {
    var txtBoxValRadio = document.getElementById('ajaxTextBoxRad').value;
    const newFn = new Function(txtBoxValRadio);
    txtRadio.push(txtBoxValRadio);

    newFn();

}

function getAjaxData() {
    var txtBoxVal = document.getElementById('ajaxTextBox').value;
    const newFn = new Function(txtBoxVal);
    txtBoxValue.push(txtBoxVal);
    newFn();
}



function openFileFormat(fformat) {
    let val = fformat.value;
    if (val == 'txt') {
        var fileElement = document.getElementById('fileInput').accept = "text/plain";
        fileFormatData = 'text/plain';
    } else if (val == 'doc') {
        var fileElement = document.getElementById('fileInput').accept = ".doc";
        fileFormatData = '.doc';
    } else if (val == 'docx') {
        var fileElement = document.getElementById('fileInput').accept = ".docx";
        fileFormatData = '.docx';
    } else if (val == 'xls') {
        var fileElement = document.getElementById('fileInput').accept = ".xls";
        fileFormatData = '.xls';
    } else if (val == 'xlsx') {
        var fileElement = document.getElementById('fileInput').accept = ".xlsx";
        fileFormatData = '.xlsx';
    } else if (val == 'pdf') {
        var fileElement = document.getElementById('fileInput').accept = ".pdf";
        fileFormatData = '.pdf';
    }
}


function moveLabel(labelOption) {
    let val = labelOption.value;
    moveLabelToPosition = '';
    if (val == 'top') {
        document.getElementsByClassName('previewField')[0].querySelector('label').style.textAlign = 'left';
        document.getElementById('previewData').style.flexDirection = 'column';
        moveLabelToPosition = 'top';

    }
    else if (val == 'right') {
        document.getElementsByClassName('previewField')[0].querySelector('label').style.textAlign = 'right';
    }
    else if (val == 'left') {
        document.getElementsByClassName('previewField')[0].querySelector('label').style.textAlign = 'left';
    }
    else if (val == 'bottom') {
        document.getElementById('previewData').style.flexDirection = 'column-reverse';
        moveLabelToPosition = 'bottom';
    }
}

// function requiredYes(event) {
//     document.querySelector('.previewBox').querySelector('label').required = true;
//     document.getElementsByClassName('previewField')[0].querySelector('sup').style.display = 'inline-block';

// }
// function requiredNo(event) {
//     document.querySelector('.previewBox').querySelector('label').required = false;
//     document.getElementsByClassName('previewField')[0].querySelector('sup').style.display = 'none';
// }
function labelNo() {
    document.querySelector('.inlineform').querySelector('input').disabled = true;
    document.querySelector('.previewBox').querySelector('label').innerHTML = "";
}

function labelYes() {
    document.querySelector('.inlineform').querySelector('input').disabled = false;
    document.querySelector('.previewBox').querySelector('label').innerHTML = document.querySelector('.inlineform').querySelector('input').value;
    document.querySelector('.previewBox').querySelector('label').innerHTML += '<sup id="prevYesNo">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond"></span></i>';
    populateToolTip();
}

function blockNo() {
    document.getElementsByClassName('previewField')[0].querySelector('input').style.width = 'fit-content';
}
function blockYes() {
    document.getElementsByClassName('previewField')[0].querySelector('input').style.width = '100%';


}


function createJsonModal(jsonObject) {
    document.getElementById("dropAreaBox").innerHTML = loadPage('editJsonModal.html');
    const modal = document.querySelector(".modal");
    modal.classList.toggle("show-modal");

    document.getElementById('JSONlabelSecond').innerHTML = jsonObject.label;
    document.getElementById('JSONtxtSecond').placeholder = jsonObject.placeholder;
    document.getElementById('json-textarea').innerHTML = JSON.stringify(jsonObject);
}
function populateToolTip() {
    document.getElementById('tooltipSecond').innerHTML = document.getElementById('tooltipFirst').value;
}
function populateLabelTextBox() {
    document.getElementById('labelSecond').innerText = document.getElementById('labelFirst').value;
    let lenofarr = radioartixArray.length

    if (radioartixArray[lenofarr - 1] == true){
     document.getElementById('labelSecond').innerHTML += '<sup id="prevYesNo">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond"></span></i>';
   }
    else{

        document.getElementById('labelSecond').innerHTML += '<sup id="prevYesNo" style="display: none;">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help To Add To Text Field</span></i>';
    }

    populateToolTip();
}
function populateLabelDialogueBox() {
    document.getElementById('dialogueSecond').innerText = document.getElementById('dialogueFirst').value;
    let lenofarr = radioartixArray.length

    if (radioartixArray[lenofarr - 1] == true){
     document.getElementById('dialogueSecond').innerHTML += '<sup id="prevYesNo">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond"></span></i>';
   }
    else{
        document.getElementById('dialogueSecond').innerHTML += '<sup id="prevYesNo" style="display: none;">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help To Add To Text Field</span></i>';
    }

    populateToolTip();

}
//video
function populateLabelVideoBox() {
    document.getElementById('videoSecond').innerText = document.getElementById('videoFirst').value;
    let lenofarr = radioartixArray.length

    if (radioartixArray[lenofarr - 1] == true){
     document.getElementById('videoSecond').innerHTML += '<sup id="prevYesNo">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond"></span></i>';
   }
    else{
        document.getElementById('videoSecond').innerHTML += '<sup id="prevYesNo" style="display: none;">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help To Add To Text Field</span></i>';
    }

    populateToolTip();

}
//image
function populateLabelimageBox() {
    document.getElementById('imageSecond').innerText = document.getElementById('imageFirst').value;
    let lenofarr = radioartixArray.length

    if (radioartixArray[lenofarr - 1] == true){
     document.getElementById('imageSecond').innerHTML += '<sup id="prevYesNo">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond"></span></i>';
   }
    else{
        document.getElementById('imageSecond').innerHTML += '<sup id="prevYesNo" style="display: none;">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help To Add To Text Field</span></i>';
    }

    populateToolTip();

}

//table
function populateLabelTableBox() {
    document.getElementById('tableSecond').innerText = document.getElementById('tableFirst').value;
    let lenofarr = radioartixArray.length

    if (radioartixArray[lenofarr - 1] == true){
     document.getElementById('tableSecond').innerHTML += '<sup id="prevYesNo">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond"></span></i>';
   }
    else{
        document.getElementById('tableSecond').innerHTML += '<sup id="prevYesNo" style="display: none;">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help To Add To Text Field</span></i>';
    }


    populateToolTip();

}
//document
function populateLabelDocumentBox() {
    document.getElementById('documentSecond').innerText = document.getElementById('documentFirst').value;
    let lenofarr = radioartixArray.length

    if (radioartixArray[lenofarr - 1] == true){
     document.getElementById('documentSecond').innerHTML += '<sup id="prevYesNo">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond"></span></i>';
   }
    else{
        document.getElementById('documentSecond').innerHTML += '<sup id="prevYesNo" style="display: none;">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help To Add To Text Field</span></i>';
    }

    populateToolTip();

}
function populatePlaceHolderTextBox() {
    document.getElementById('txtSecond').placeholder = document.getElementById('txtFirst').value;
}
//dialogue
function placeholderDialogueBox() {
    document.getElementById('dialogueCal').placeholder = document.getElementById('dialoguePlace1').value;


}
//date and time
function populateDateAndTime() {
    document.getElementById('dateAndTime2').innerText = document.getElementById('dateAndTime1').value;
    let lenofarr = radioartixArray.length

    if (radioartixArray[lenofarr - 1] == true){
     document.getElementById('dateAndTime2').innerHTML += '<sup id="prevYesNo">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond"></span></i>';
   }
    else{
        document.getElementById('dateAndTime2').innerHTML += '<sup id="prevYesNo" style="display: none;">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help To Add To Text Field</span></i>';
    }
    populateToolTip();
}
//url
function populateLabelUrl() {
    document.getElementById('linkSecond').innerText = document.getElementById('linkFirst').value;

    let lenofarr = radioartixArray.length

    if (radioartixArray[lenofarr - 1] == true){
     document.getElementById('linkSecond').innerHTML += '<sup id="prevYesNo">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond"></span></i>';
   }
    else{
        document.getElementById('linkSecond').innerHTML += '<sup id="prevYesNo" style="display: none;">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help To Add To Text Field</span></i>';
    }

    populateToolTip();

}
function populatePlaceHolderUrl() {
    document.getElementById('urlSecond').placeholder = document.getElementById('urlFirst').value;


}
//dialogue
function populatePlaceHolderDialogue() {
    document.getElementById('dialogue2').placeholder = document.getElementById('dialogue1').value;

}

//text area form
function populateLabeAreaBox() {
    document.getElementById('areaLabelSecond').innerText = document.getElementById('areaLabel').value;
    let lenofarr = radioartixArray.length

    if (radioartixArray[lenofarr - 1] == true){
     document.getElementById('areaLabelSecond').innerHTML += '<sup id="prevYesNo">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond"></span></i>';
   }
    else{
        document.getElementById('areaLabelSecond').innerHTML += '<sup id="prevYesNo" style="display: none;">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help To Add To Text Field</span></i>';
    }
    populateToolTip();
}
function placeHolderTextArea() {
    document.getElementById('areaPlace2').placeholder = document.getElementById('areaPlace1').value;
}
function changeWidth(){
    var checkArea=document.getElementById('widthChange1').value+"5px"
    var test=document.getElementById('areaPlace2').style.height=checkArea
}


//promise
function populateLabePromiseBox() {


    var promii = document.getElementById("promisId2").value = document.getElementById("promisId1").value;

}
//numbers form
function labelNumberTextBox() {
    document.getElementById('numberSecond').innerText = document.getElementById('numberFirst').value;

    let lenofarr = radioartixArray.length

    if (radioartixArray[lenofarr - 1] == true){
     document.getElementById('numberSecond').innerHTML += '<sup id="prevYesNo">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond"></span></i>';
   }
    else{
        document.getElementById('numberSecond').innerHTML += '<sup id="prevYesNo" style="display: none;">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help To Add To Text Field</span></i>';
    }
    populateToolTip();
}
function PlaceHolderNumberBox() {
    document.getElementById('numberBox2').placeholder = document.getElementById('numberBox1').value;
}
//phone
function PhoneTextBox() {
    document.getElementById('phoneSecond').innerText = document.getElementById('phoneFirst').value;
    let lenofarr = radioartixArray.length

    if (radioartixArray[lenofarr - 1] == true){
     document.getElementById('phoneSecond').innerHTML += '<sup id="prevYesNo">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond"></span></i>';
   }
    else{
        document.getElementById('phoneSecond').innerHTML += '<sup id="prevYesNo" style="display: none;">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help To Add To Text Field</span></i>';
    }
    populateToolTip();
}
function PlaceHolderPhoneBox() {
    document.getElementById('phoneBox2').placeholder = document.getElementById('phoneBox1').value;
}
//email form function
function emailTextBox() {
    document.getElementById('emailSecond').innerText = document.getElementById('emailFirst').value;
    let lenofarr = radioartixArray.length

    if (radioartixArray[lenofarr - 1] == true){
     document.getElementById('emailSecond').innerHTML += '<sup id="prevYesNo">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond"></span></i>';
   }
    else{
        document.getElementById('emailSecond').innerHTML += '<sup id="prevYesNo" style="display: none;">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help To Add To Text Field</span></i>';
    }
    populateToolTip();

}
function PlaceHolderEmailBox() {
    document.getElementById('emailBox2').placeholder = document.getElementById('emailBox1').value;
}
//section
function PlaceHolderSectionBox() {
    document.getElementById('sectionBox2').textContent = document.getElementById('sectionBox1').value;
    document.getElementById('sectionBox2').innerHTML += '<i class="Questionicons f-left"><span class="R-st" id="tooltipSecond"></span></i>';


}
//signature
function PlaceHolderSignatureBox() {
    document.getElementById('signBox2').textContent = document.getElementById('signBox1').value;


}
//titlebox
function PlaceHolderTitleBox() {
    document.getElementById('titleBox2').innerText = document.getElementById('titleBox1').value;
    let lenofarr = radioartixArray.length

    if (radioartixArray[lenofarr - 1] == true){
     document.getElementById('titleBox2').innerHTML += '<sup id="prevYesNo">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond"></span></i>';
   }
    else{
        document.getElementById('titleBox2').innerHTML += '<sup id="prevYesNo" style="display: none;">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help To Add To Text Field</span></i>';
    }
    populateToolTip();


}
//checkbox
function PlaceHolderCheckBox() {
    document.getElementById('checkBox2').textContent = document.getElementById('checkBox1').value;
    let lenofarr = radioartixArray.length

    if (radioartixArray[lenofarr - 1] == true){
     document.getElementById('checkBox2').innerHTML += '<sup id="prevYesNo">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond"></span></i>';
   }
    else{
        document.getElementById('checkBox2').innerHTML += '<sup id="prevYesNo" style="display: none;">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help To Add To Text Field</span></i>';
    }
    populateToolTip();
}
function PlaceHolderRadio() {
    document.getElementById('radioBox2').innerText = document.getElementById('radioBox1').value;
    let lenofarr = radioartixArray.length

    if (radioartixArray[lenofarr - 1] == true){
     document.getElementById('radioBox2').innerHTML += '<sup id="prevYesNo">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond"></span></i>';
   }
    else{
        document.getElementById('radioBox2').innerHTML += '<sup id="prevYesNo" style="display: none;">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help To Add To Text Field</span></i>';
    }
    populateToolTip();
}
//button
function PlaceHolderButtonBox() {
    document.getElementById('buttonBox2').value = document.getElementById('buttonBox1').value;
}
function setButtonBlock(isBlock) {
    if (isBlock == false) {
        document.getElementById('buttonBox2').style.width = 'fit-content';
    }
    else if (isBlock == true) {
        document.getElementById('buttonBox2').style.width = '100%';
    }
}

function setButtonType(inputType) {
    document.getElementById('buttonBox2').type = inputType;
}
function PlaceHolderSelectBox() {

    document.getElementById('selectBox2').innerText = document.getElementById('selectBox1').value;
    let lenofarr = radioartixArray.length

    if (radioartixArray[lenofarr - 1] == true){
     document.getElementById('selectBox2').innerHTML += '<sup id="prevYesNo">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond"></span></i>';
   }
    else{
        document.getElementById('selectBox2').innerHTML += '<sup id="prevYesNo" style="display: none;">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help To Add To Text Field</span></i>';
    }
    populateToolTip();
}
function PlaceHolderSelectLabel(event) {
    let keyTarget = event.target.parentElement.parentElement.id;
    let keyReplace = keyTarget.replace('selectRow', "previewRow");
    document.querySelector('#previewSelect').querySelector('#' + keyReplace).innerHTML = document.getElementById(keyTarget).querySelector('#selectLabel').value;
}

function PlaceHolderSelectInput(event) {

    let keyTarget = event.target.parentElement.parentElement.id;
    let keyReplace = keyTarget.replace('selectRow', "previewRow");
    document.querySelector('#previewSelect').querySelector('#' + keyReplace).value = document.getElementById(keyTarget).querySelector('#selectValue').value;
}
function PlaceHolderImage(event) {


     if(document.getElementById('imagePreview')){
        var reader = new FileReader();
        reader.onload = function () {
            var outputPreview = document.getElementById('imagePreview');
    
            outputPreview.src = reader.result;

        };
        reader.readAsDataURL(event.target.files[0]);

    }
  
}

function addRow() {

    radioRow += 1;
    let selectRowId = 'selectRow' + radioRow;
    let previewRowId = 'previewRow' + radioRow;
    let newRow = `<tr id="` + selectRowId + `">
    <td><input class="form-control" id="selectLabel" onkeyup="PlaceHolderSelectLabel(event)" type='text' placeholder="Label"></td>
    <td><button class="removeField-button" onclick="deleteRow(event)">x</button></td>
    </tr>`;
    document.querySelector('#buttonRow').insertAdjacentHTML('beforebegin', newRow);
    var previewRowTemp = document.createElement('option');
    previewRowTemp.id = previewRowId;
    document.getElementById('previewSelect').appendChild(previewRowTemp);
}

function deleteRow(event) {
    let targetRow = event.target.parentElement.parentElement;

    targetRow.remove();
    document.querySelector('#previewSelect').querySelector('#' + targetRow.id.replace('selectRow', "previewRow")).remove();
}

function PlaceHolderRadioBox() {

    document.getElementById('radioBox2').innerText = document.getElementById('radioBox1').value;
    let lenofarr = radioartixArray.length

    if (radioartixArray[lenofarr - 1] == true){
     document.getElementById('radioBox2').innerHTML += '<sup id="prevYesNo">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond"></span></i>';
   }
    else{
        document.getElementById('radioBox2').innerHTML += '<sup id="prevYesNo" style="display: none;">*</sup> <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help To Add To Text Field</span></i>';
    }
    populateToolTip();
}

function PlaceHolderRadioLabel(event) {
    let keyTarget = event.target.parentElement.parentElement.id;
    let keyReplace = keyTarget.replace('radioRow', "radioLabelRow");
    document.querySelector('#previewRadio').querySelector('#' + keyReplace).innerHTML = document.getElementById(keyTarget).querySelector('#radioLabel').value;
}

function PlaceHolderRadioInput(event) {
    let keyTarget = event.target.parentElement.parentElement.id;
    let keyReplace = keyTarget.replace('radioRow', "radioPrevRow");
    document.querySelector('#previewRadio').querySelector('#' + keyReplace).value = document.getElementById(keyTarget).querySelector('#radioValue').value;
}



function addRadioRow() {

    radioRow += 1;
    let radioRowId = 'radioRow' + radioRow;
    let radioPrevRowId = 'radioPrevRow' + radioRow;
    let radioLabelRowId = 'radioLabelRow' + radioRow;

    let newRow = `<tr id="` + radioRowId + `">
    <td><input id="radioLabel" onkeyup="PlaceHolderRadioLabel(event)" type='text' placeholder="Label"></td>
    <td><button class="removeField-button" onclick="deleteRadioRow(event)">x</button></td>
    </tr>`;
    document.querySelector('#buttonRow').insertAdjacentHTML('beforebegin', newRow);
    var previewRowTemp = document.createElement('input');
    previewRowTemp.type = 'radio';
    previewRowTemp.id = radioPrevRowId;
    previewRowTemp.className = 'previewRadioEle';
    document.getElementById('previewRadio').appendChild(previewRowTemp);
    var previewRowLabel = document.createElement('label');
    previewRowLabel.id = radioLabelRowId;
    document.getElementById('previewRadio').appendChild(previewRowLabel);

}

function deleteRadioRow(event) {
    let targetRow = event.target.parentElement.parentElement;
    targetRow.remove();
    document.querySelector('#previewRadio').querySelector('#' + targetRow.id.replace('radioRow', "radioPrevRow")).remove();
    document.querySelector('#previewRadio').querySelector('#' + targetRow.id.replace('radioRow', "radioLabelRow")).remove();

}


// function requiredYes() {
//     var element = document.getElementById("prevYesNo");
//     element.classList.add("requireYes");
//     element.classList.remove("requireNo");
// }
// function requiredNo() {
//     var element = document.getElementById("prevYesNo");
//     element.classList.add("requireNo");
//     element.classList.remove("requireYes");

// }

function labelYes() {
    document.getElementById("labelSecond").style.display = "block !important";


}

function labelNo() {
    document.querySelector('.inlineform').querySelector('input').disabled = true;
    document.querySelector('.previewBox').querySelector('label').innerHTML = "";
}

function labelYes() {
    document.querySelector('.inlineform').querySelector('input').disabled = false;
    document.querySelector('.previewBox').querySelector('label').innerHTML = document.querySelector('.inlineform').querySelector('input').value;
    populateToolTip();
}





//index title
function populateTitleTextBox() {

    var x = document.forms["myForm"]["fname"].value;
    if (x == "" || x == null) {
         alert("Please Enter Your Form Name");
        document.getElementById("TitleFirst").style.backgroundColor="0 0 5px 1px red";
        return false;
      }

    var formTitle = document.getElementById("TitleFirst").value;
    var w = formTitle;
    var url_string = `form.html?form=${w}`;
    document.getElementById("createTitle").setAttribute("href", url_string);
    localStorage.setItem("NewJsonFormat", []);
}
function formFunction() {

    var url_string = window.location.href;
    var url = new URL(url_string);
    var formTopic = url.searchParams.get("form");
    fileFormName = formTopic;
    document.getElementById('TitleSecond').innerText = 'Form Name : ' + formTopic;


}
//email form function


const inputs = document.querySelectorAll('.requiredField');

for (const input of inputs) {
    input.setAttribute('required', '');
}

var els = document.getElementsByClassName('closeModalId');

for (var i = 0; i < els.length; i++) {
    els[i].addEventListener('click', function () {
        this.parentNode.remove();
    });
}


function copyCurrentDiv(e) {
    var copyCurrentDiv = e.target.parentElement.parentElement.cloneNode(true);
    sectionId = e.target.parentElement.parentElement.parentElement.id;
    copyCurrentDiv.id = copyCurrentDiv.id + inpTextCopyCountVal;
    inpTextCopyCountVal += 1;
    var dropPlace = document.getElementById('parentDropAreaBox');
    var dropSecPlace = document.getElementById(sectionId);
    if (sectionId = 'secData') {
        dropSecPlace.appendChild(copyCurrentDiv);

    } else {
        dropPlace.appendChild(copyCurrentDiv);
    }
}
//karthika-image upload base64
var loadFile = function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('output');


        output.src = reader.result;

    };
    reader.readAsDataURL(event.target.files[0]);
};

function cancelModal() {
    closeModal();


}
//remove function
function removeModal() {
    closeModal();

}
function removeCurrentDiv(e) {
    e.target.parentElement.parentElement.remove();
}



function openFile(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function () {
        var text = reader.result;
        var node = document.getElementById('output');
        node.innerText = text;
        jsonDoc.push(node.innerText);
    };
    reader.readAsText(input.files[0]);
};
//embed video url

function showVideo(url) {
    var videoUrl = document.getElementById("videoUrl").value;

    var id = videoUrl.split("?v=")[1]; //sGbxmsDFVnE
    var embedlink = "https://www.youtube.com/embed/" + id;

    document.getElementById("myFrame").src = embedlink;
    var source = document.createElement('source');
    source.setAttribute('type', 'video/mp4');

}
//embed width height
function setDimensions() {
    var h = document.getElementById("height").value;
    var w = document.getElementById("width").value;
    document.getElementById('myFrame').style.width = w + "px";
    document.getElementById('myFrame').style.height = h + "px";
}




//responsive open-close sidebar-karthika

//karthika-sow and hide siedebar
function addRemove() {
    var element = document.getElementById('listId');
    element.classList.toggle('open');


}

function CreateRowColumn() {
    (function (window, document, undefined) {
        "use strict";

        var wrap = document.getElementById("wrap"),
            setColumn = document.getElementById("column"),
            setRow = document.getElementById("row"),
            btnGen = document.getElementById("btnGen"),
            btnCopy = document.getElementById("btnCopy");


        generateTable();

        function generateTable(e) {
            var newTable = document.createElement("table"),
                tBody = newTable.createTBody(),
                nOfColumns = parseInt(setColumn.value, 10),
                nOfRows = parseInt(setRow.value, 10),
                row = generateRow(nOfColumns);

            newTable.createCaption().appendChild(document.createTextNode(""));

            for (var i = 0; i < nOfRows; i++) {
                tBody.appendChild(row.cloneNode(true));
            }

            (wrap.hasChildNodes() ? wrap.replaceChild : wrap.appendChild).call(wrap, newTable, wrap.children[0]);
        }

        function generateRow(n) {
            var row = document.createElement("tr"),
                text = document.createElement("input");

            for (var i = 0; i < n; i++) {
                row.insertCell().appendChild(text.cloneNode(true));
            }

            return row.cloneNode(true);
        }

        function copyTo(e) {
            prompt("Copy to clipboard: Ctrl+C, Enter", wrap.innerHTML);
        }
    }(window, window.document));
}

function splitLabel(label) {
    label = label.split('<sup id');
    label = label[0];
    // console.log('label ', label);
    return label;
}



//karthika-get value in privilages

function displayResult(event) {

    priVal = event.target.id;
    checkPriviVal = false;

    privilageValuea[previewCloneNewId] = [];

    if (newPriVal.includes(priVal)) {
        let priIndex = newPriVal.indexOf(priVal);
        newPriVal.splice(priIndex, 1);
    }
    else {
        newPriVal.push(priVal);
    }

    privilageValuea[previewCloneNewId] = newPriVal;


}


function convertToJson(saveType,evt) {
    jsonData = [];
    jsonData.push({ FileName: fileFormName });
    let parent = document.querySelector('#parentDropAreaBox');
    let children = parent.children;
    var inc = -1;
    var doc = +1;
    // radioartixArray[previewCloneNewId]=false;
    // incs = radioartixArray.length - 1

    for (let element of children) {
        inc = inc + 1;

        var incSec = 0;
        

        // console.log(inc,"hgghfhgdhcccj")
        let ElementId = element.id;
        let currentElementType = ElementId.replace(/[0-9]/g, '');
        let insideSection = false;
        let infoList = [];
        let labelRequired;
        let sectionData = [];
        let tooltip = '';
        let labelText = '';
        let placeholder = '';
        let requiredCondition = false;
        let selectOptions = '';
        let selectValues = '';
        let selectData = {};
        let radioName = '';
        let radioData = {};
        let buttonType = '';
        let inputType = '';
        let buttonBlockStyle = false;
        let imgSRC = '';
        let videoSRC = '';
        let privilageValue = '';
        let promise = '';
        let table = '';
        let documentType = '';

        let selectRequired = '';




        // Section checker
        try {
            if (currentElementType == 'sectionEle') {
                insideSection = true;
                // incs = radioartixArray.length - 1
                let parent = document.querySelector('#' + element.id);
                let children = parent.querySelector('[id*=sectData]').querySelectorAll('.field-card');
                for (let element of children) {

                    incSec = incSec + 1;


                    let ElementId = element.id;
                    let currentElementType = ElementId.replace(/[0-9]/g, '');
                    let insideSection = false;
                    let infoList = [];
                    let labelRequired;
                    let tooltip = '';
                    let labelText = '';
                    let placeholder = '';
                    let requiredCondition = false;
                    let selectOptions = '';
                    let selectValues = '';
                    let selectData = {};
                    let radioName = '';
                    let radioData = {};
                    let buttonType = '';
                    let buttonBlockStyle = false;
                    let imgSRC = '';
                    let videoSRC = '';
                    let privilageValue = '';
                    let promise = '';
                    let inputType = '';
                    let table = '';
                    let documentType = '';

                    let selectRequired = '';
                    try {
                        if (element.querySelector('#insertedLabel').innerHTML != '') {
                            labelRequired = true;
                        }
                        else {
                            labelRequired = false;
                        }
                    } catch (error) { }
                    // ToolTip
                    try {
                        tooltip = element.querySelector('#insertedTooltip').innerHTML;
                    } catch (error) { }
                    // Label
                    try {
                        labelText = element.querySelector("#insertedLabel").innerHTML;
                        labelText = splitLabel(labelText);
                    } catch (error) { }
                    // Placeholder
                    try {
                        placeholder = element.querySelector('#insertedInput').placeholder;
                    } catch (error) { }
                    // Required
                    try {
                        if (element.querySelector('#insertedInput').required) {
                            requiredCondition = true;
                        }
                        else {
                            requiredCondition = false;
                        }
                    } catch (error) { }
                    try {
                        if (currentElementType == 'selectBoxEle') {
                            let selectOptionsList = element.querySelectorAll('option');
                            selectOptionsList.forEach((myItem) => {
                                selectOptions = myItem.innerHTML;
                                selectValues = myItem.value;
                                selectData[selectValues] = selectOptions;
                            });
                        }

                    } catch (error) { }
                    try {
                        if (currentElementType == 'radioEle') {

                            let selectRadioList = element.querySelectorAll('input');
                            selectRadioList.forEach((myItem) => {
                                radioOptions = myItem.nextElementSibling.innerHTML;
                                radioValues = myItem.value;
                                radioData[radioValues] = radioOptions;
                                radioName = myItem.name;
                            });
                        }
                    } catch (error) { }
                    try {

                        inputType = element.querySelector('input').type;
                        if (element.querySelector('input').style.width == 'fit-content') {
                            buttonBlockStyle = false;
                        }
                        else {
                            buttonBlockStyle = true;
                        }
                    } catch (error) { }
                    try {
                        if (element.querySelector('img')) {
                            imgSRC = element.querySelector('img').src;
                        }
                    } catch (error) { }
                    //karthika-videolink
                    try {
                        if (element.querySelector('iframe')) {
                            videoSRC = element.querySelector('iframe').src;

                        }
                    } catch (error) { }
                    //karthika-table
                    try {
                        if (element.querySelector('samp')) {
                            table = element.querySelector('samp').innerHTML;

                        }
                    } catch (error) { }

                    //karthika-promise
                    try {
                        if (element.querySelector('textarea')) {
                            var promiV = document.querySelector('textarea').value;


                        }
                    } catch (error) { }

                    try {
                        if (element.querySelector('#insertedButton')) {
                            labelText = element.querySelector('#insertedButton').value;
                            buttonTypeName = element.querySelector('#insertedButton').type;
                        }
                    } catch (error) { }

                    try {
                        if (currentElementType == 'documentEle') {
                            documentType = element.querySelector('#insertedInput').accept;
                        }
                    } catch (error) { }
                    
                    
                    sectionData.push(
                        {
                            id: ElementId,
                            labelRequired: labelRequired,
                            label: labelText,
                            placeholder: placeholder,
                            tooltip: tooltip,
                            required: radioartixArray[incSec],
                            selectDataValue: checkFirstSelect[inc],
                            radioValue: checkFirstRadio[inc],
                            selectData: selectData,
                            radioData: radioData,
                            radioName: radioName,
                            inputType: inputType,
                            buttonBlockStyle: buttonBlockStyle,
                            imgSRC: imgSRC,
                            videoSRC: videoSRC,
                            privilageValue: privilageValuea[inc],
                            promise: promiV,
                            table: table,
                            documentType: documentType,
                            buttonType: buttonTypeName

                        }
                    );
                }

            }
        } catch (error) { }

        try {
            if (element.querySelector('#insertedLabel').innerHTML != '') {
                labelRequired = true;
            }
            else {
                labelRequired = false;
            }
        } catch (error) { }
        // ToolTip
        try {
            tooltip = element.querySelector('#insertedTooltip').innerHTML;
        } catch (error) { }
        // Label
        try {
            if (currentElementType == 'sectionEle') {
                labelText = element.querySelector("#insertedSectionLabel").innerHTML;
            }
            else {
                labelText = element.querySelector("#insertedLabel").innerHTML;
            }
            labelText = splitLabel(labelText);
        } catch (error) { }
        // Placeholder
        try {
            placeholder = element.querySelector('#insertedInput').placeholder;
        } catch (error) { }
        // Required
        try {
            if (element.querySelector('#insertedInput').required) {
                requiredCondition = true;
            } else {
                requiredCondition = false;
            }
        } catch (error) { }
        try {
            if (currentElementType == 'selectBoxEle') {
                let selectOptionsList = element.querySelectorAll('option');
                selectOptionsList.forEach((myItem) => {
                    selectOptions = myItem.innerHTML;
                    selectValues = myItem.value;
                    selectData[selectValues] = selectOptions;
                });
            }

        } catch (error) { }
        try {
            if (currentElementType == 'radioEle') {

                let selectRadioList = element.querySelectorAll('input');
                selectRadioList.forEach((myItem) => {
                    radioOptions = myItem.nextElementSibling.innerHTML;
                    radioValues = myItem.value;
                    radioData[radioValues] = radioOptions;
                    radioName = myItem.name;
                });
            }
        } catch (error) { }
        try {

            inputType = element.querySelector('input').type;
            if (element.querySelector('input').style.width == 'fit-content') {
                buttonBlockStyle = false;
            }
            else {
                buttonBlockStyle = true;
            }
        } catch (error) { }
        try {
            if (element.querySelector('img')) {
                imgSRC = element.querySelector('img').src;
            }
        } catch (error) { }
        //karthika-videolink
        try {
            if (element.querySelector('iframe')) {
                videoSRC = element.querySelector('iframe').src;

            }
        } catch (error) { }
        //karthika-table
        try {
            if (element.querySelector('samp')) {
                table = element.querySelector('samp').innerHTML;
            }
        } catch (error) { }
        //karthika-promise
        try {
            if (element.querySelector('textarea')) {
                var promiV = document.querySelector('textarea').value;

            }
        } catch (error) { }


        try {
            if (element.querySelector('#insertedButton')) {
                if (currentElementType != "sectionEle") {
                    labelText = element.querySelector('#insertedButton').value;
                    buttonTypeName = element.querySelector('#insertedButton').type;
                }
            }
        } catch (error) { }

        try {
            if (currentElementType == 'documentEle') {
                if (currentElementType != "sectionEle") {
                    documentType = element.querySelector('#insertedInput').accept;
                }
            }
        } catch (error) { }
        //testuser
        
        // try{
        //     if (currentElementType == 'textFieldEle'){
        //         inc = radioartixArray.length - 1
        //     }
        // }catch(error){}

        jsonData.push({
            id: ElementId,
            labelRequired: labelRequired,
            label: labelText,
            placeholder: placeholder,
            tooltip: tooltip,
            required: radioartixArray[inc],
            selectDataValue: checkFirstSelect[inc],
            radioValue: checkFirstRadio[inc],
            selectData: selectData,
            radioData: radioData,
            radioName: radioName,
            inputType: inputType,
            buttonBlockStyle: buttonBlockStyle,
            imgSRC: imgSRC,
            videoSRC: videoSRC,
            privilageValue: privilageValuea[inc],
            promise: promiV,
            table: table,
            documentType: documentType,
            buttonType: buttonTypeName,
            sectionData: sectionData,
        });
    }

    JSON.stringify(jsonData);
    let jsonText = JSON.stringify(jsonData);
    if (saveType == 'json') {
        saveJsonText(jsonText, `${fileFormName}.json`, 'utf8');
    } else if (saveType == 'NewjsonStore') {
        localStorage.setItem("NewJsonFormat", []);
        window.location.reload();
    } else if (saveType == 'jsonStore') {
        localStorage.setItem('NewJsonFormat', jsonText);
        reloadState=true;
    } else if (saveType == "viewJson") {
        if (localStorage.getItem("NewJsonFormat") == "") {
        }
        var oldField = document.querySelector('.fieldsetBody');
        var newViewField = document.querySelector('.fieldsetView');
        oldField.style.display = 'none';
        newViewField.style.display = 'block';
        var JsonViewEle = document.getElementById('jsonViewElement');
        JsonViewEle.innerHTML = "";
        var JsonParseData = JSON.stringify(jsonData, undefined, 4);
        JsonViewEle.appendChild(document.createElement('pre')).innerHTML = syntaxHighlight(JsonParseData);
    }
    //NNA

    else if(saveType=="preViewJson"){

        if (localStorage.getItem("NewJsonFormat") == "") {
        }

        var oldField = document.querySelector('.fieldsetBody');
        var newViewField = document.querySelector('.fieldsetView');
        
        oldField.style.display = 'none';
        newViewField.style.display = 'block';
        var JsonViewEle = document.getElementById('jsonViewElement');
        JsonViewEle.innerHTML = "";
        
        var htmlContent= document.getElementById('parentDropAreaBox');
        const cloneDiv = htmlContent.cloneNode(true);

        
        cloneDiv.id = "parentDropAreaBox1";
        
        
        var previewData= document.getElementById('jsonViewElement').appendChild(cloneDiv);
        for(let i=1;i<=count_sig; i++){
            let ew = document.querySelectorAll("[id='sig-canvas"+ i +"']")
            let id_sign = 'sig-canvas0' + i
            try{
                ew[1].id = id_sign
            }catch{}
         
        }
        try{
            document.getElementById("sig-canvas01").addEventListener("mouseover", myFunction1);
        document.getElementById("sig-canvas02").addEventListener("mouseover", myFunction2);
        document.getElementById("sig-canvas03").addEventListener("mouseover", myFunction3);
        document.getElementById("sig-canvas04").addEventListener("mouseover", myFunction4);
        function myFunction1(){
            (function () {
                window.requestAnimFrame = (function (callback) {
                  return (
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimaitonFrame ||
                    function (callback) {
                      window.setTimeout(callback, 1000 / 60);
                    }
                  );
                })();
            })
            var canvas = document.getElementById('sig-canvas01');
            var ctx = canvas.getContext("2d");
            ctx.strokeStyle = "#222222";
            ctx.lineWidth = 4;
    
            var drawing = false;
            var mousePos = {
                x: 0,
                y: 0,
            };
            var lastPos = mousePos;
    
            canvas.addEventListener(
                "mousedown",
                function (e) {
                drawing = true;
                lastPos = getMousePos(canvas, e);
                },
                false
            );
    
            canvas.addEventListener(
                "mouseup",
                function (e) {
                drawing = false;
                },
                false
            );
    
            canvas.addEventListener(
                "mousemove",
                function (e) {
                mousePos = getMousePos(canvas, e);
                },
                false
            );
    
            // Add touch event support for mobile
            canvas.addEventListener("touchstart", function (e) {}, false);
    
            canvas.addEventListener(
                "touchmove",
                function (e) {
                var touch = e.touches[0];
                var me = new MouseEvent("mousemove", {
                    clientX: touch.clientX,
                    clientY: touch.clientY,
                });
                canvas.dispatchEvent(me);
                },
                false
            );
    
            canvas.addEventListener(
                "touchstart",
                function (e) {
                mousePos = getTouchPos(canvas, e);
                var touch = e.touches[0];
                var me = new MouseEvent("mousedown", {
                    clientX: touch.clientX,
                    clientY: touch.clientY,
                });
                canvas.dispatchEvent(me);
                },
                false
            );
    
            canvas.addEventListener(
                "touchend",
                function (e) {
                var me = new MouseEvent("mouseup", {});
                canvas.dispatchEvent(me);
                },
                false
            );
    
            function getMousePos(canvasDom, mouseEvent) {
                var rect = canvasDom.getBoundingClientRect();
                return {
                x: mouseEvent.clientX - rect.left,
                y: mouseEvent.clientY - rect.top,
                };
            }
    
            function getTouchPos(canvasDom, touchEvent) {
                var rect = canvasDom.getBoundingClientRect();
                return {
                x: touchEvent.touches[0].clientX - rect.left,
                y: touchEvent.touches[0].clientY - rect.top,
                };
            }
    
            function renderCanvas() {
                if (drawing) {
                ctx.moveTo(lastPos.x, lastPos.y);
                ctx.lineTo(mousePos.x, mousePos.y);
                ctx.stroke();
                lastPos = mousePos;
                }
            }
    
            // Prevent scrolling when touching the canvas
            document.body.addEventListener(
                "touchstart",
                function (e) {
                if (e.target == canvas) {
                    e.preventDefault();
                }
                },
                false
            );
            document.body.addEventListener(
                "touchend",
                function (e) {
                if (e.target == canvas) {
                    e.preventDefault();
                }
                },
                false
            );
            document.body.addEventListener(
                "touchmove",
                function (e) {
                if (e.target == canvas) {
                    e.preventDefault();
                }
                },
                false
            );
    
            (function drawLoop() {
                requestAnimFrame(drawLoop);
                renderCanvas();
            })();
    
            function clearCanvas() {
                canvas.width = canvas.width;
            }
    
            // Set up the UI
            var sigText = document.getElementById("sig-dataUrl");
            var sigImage = document.getElementById("sig-image");
            let ew = document.querySelectorAll("[id='sig-clearBtn1']")
            try{
                ew[1].id = 'sig-clearBtn01'
            }
            catch{}
            var clearBtn = document.getElementById("sig-clearBtn01");
            clearBtn.addEventListener(
                "click",
                function (e) {
                clearCanvas();
                sigImage.setAttribute("src", "");
                },
                false
            );
   
        }
        function myFunction2(){
            (function () {
                window.requestAnimFrame = (function (callback) {
                  return (
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimaitonFrame ||
                    function (callback) {
                      window.setTimeout(callback, 1000 / 60);
                    }
                  );
                })();
            })
            var canvas = document.getElementById('sig-canvas02');
            var ctx = canvas.getContext("2d");
            ctx.strokeStyle = "#222222";
            ctx.lineWidth = 4;
    
            var drawing = false;
            var mousePos = {
                x: 0,
                y: 0,
            };
            var lastPos = mousePos;
    
            canvas.addEventListener(
                "mousedown",
                function (e) {
                drawing = true;
                lastPos = getMousePos(canvas, e);
                },
                false
            );
    
            canvas.addEventListener(
                "mouseup",
                function (e) {
                drawing = false;
                },
                false
            );
    
            canvas.addEventListener(
                "mousemove",
                function (e) {
                mousePos = getMousePos(canvas, e);
                },
                false
            );
    
            // Add touch event support for mobile
            canvas.addEventListener("touchstart", function (e) {}, false);
    
            canvas.addEventListener(
                "touchmove",
                function (e) {
                var touch = e.touches[0];
                var me = new MouseEvent("mousemove", {
                    clientX: touch.clientX,
                    clientY: touch.clientY,
                });
                canvas.dispatchEvent(me);
                },
                false
            );
    
            canvas.addEventListener(
                "touchstart",
                function (e) {
                mousePos = getTouchPos(canvas, e);
                var touch = e.touches[0];
                var me = new MouseEvent("mousedown", {
                    clientX: touch.clientX,
                    clientY: touch.clientY,
                });
                canvas.dispatchEvent(me);
                },
                false
            );
    
            canvas.addEventListener(
                "touchend",
                function (e) {
                var me = new MouseEvent("mouseup", {});
                canvas.dispatchEvent(me);
                },
                false
            );
    
            function getMousePos(canvasDom, mouseEvent) {
                var rect = canvasDom.getBoundingClientRect();
                return {
                x: mouseEvent.clientX - rect.left,
                y: mouseEvent.clientY - rect.top,
                };
            }
    
            function getTouchPos(canvasDom, touchEvent) {
                var rect = canvasDom.getBoundingClientRect();
                return {
                x: touchEvent.touches[0].clientX - rect.left,
                y: touchEvent.touches[0].clientY - rect.top,
                };
            }
    
            function renderCanvas() {
                if (drawing) {
                ctx.moveTo(lastPos.x, lastPos.y);
                ctx.lineTo(mousePos.x, mousePos.y);
                ctx.stroke();
                lastPos = mousePos;
                }
            }
    
            // Prevent scrolling when touching the canvas
            document.body.addEventListener(
                "touchstart",
                function (e) {
                if (e.target == canvas) {
                    e.preventDefault();
                }
                },
                false
            );
            document.body.addEventListener(
                "touchend",
                function (e) {
                if (e.target == canvas) {
                    e.preventDefault();
                }
                },
                false
            );
            document.body.addEventListener(
                "touchmove",
                function (e) {
                if (e.target == canvas) {
                    e.preventDefault();
                }
                },
                false
            );
    
            (function drawLoop() {
                requestAnimFrame(drawLoop);
                renderCanvas();
            })();
    
            function clearCanvas() {
                canvas.width = canvas.width;
            }
    
            // Set up the UI
            var sigText = document.getElementById("sig-dataUrl");
            // console.log('sigText', sigText);
            var sigImage = document.getElementById("sig-image");
            // console.log('sigImage', sigImage);
    
            let ew = document.querySelectorAll("[id='sig-clearBtn2']")
            try{
                ew[1].id = 'sig-clearBtn02'
            }
            catch{}
            var clearBtn = document.getElementById("sig-clearBtn02");
            // var submitBtn = document.getElementById("sig-submitBtn");
            clearBtn.addEventListener(
                "click",
                function (e) {
                clearCanvas();
                sigText.innerHTML = "Data URL for your signature will go here!";
                sigImage.setAttribute("src", "");
                },
                false
            );
   
        }
        function myFunction3(){
            (function () {
                window.requestAnimFrame = (function (callback) {
                  return (
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimaitonFrame ||
                    function (callback) {
                      window.setTimeout(callback, 1000 / 60);
                    }
                  );
                })();
            })
            var canvas = document.getElementById('sig-canvas03');
            // console.log(canvas,'teststts')
            var ctx = canvas.getContext("2d");
            ctx.strokeStyle = "#222222";
            ctx.lineWidth = 4;
    
            var drawing = false;
            var mousePos = {
                x: 0,
                y: 0,
            };
            var lastPos = mousePos;
    
            canvas.addEventListener(
                "mousedown",
                function (e) {
                drawing = true;
                lastPos = getMousePos(canvas, e);
                },
                false
            );
    
            canvas.addEventListener(
                "mouseup",
                function (e) {
                drawing = false;
                },
                false
            );
    
            canvas.addEventListener(
                "mousemove",
                function (e) {
                mousePos = getMousePos(canvas, e);
                },
                false
            );
    
            // Add touch event support for mobile
            canvas.addEventListener("touchstart", function (e) {}, false);
    
            canvas.addEventListener(
                "touchmove",
                function (e) {
                var touch = e.touches[0];
                var me = new MouseEvent("mousemove", {
                    clientX: touch.clientX,
                    clientY: touch.clientY,
                });
                canvas.dispatchEvent(me);
                },
                false
            );
    
            canvas.addEventListener(
                "touchstart",
                function (e) {
                mousePos = getTouchPos(canvas, e);
                var touch = e.touches[0];
                var me = new MouseEvent("mousedown", {
                    clientX: touch.clientX,
                    clientY: touch.clientY,
                });
                canvas.dispatchEvent(me);
                },
                false
            );
    
            canvas.addEventListener(
                "touchend",
                function (e) {
                var me = new MouseEvent("mouseup", {});
                canvas.dispatchEvent(me);
                },
                false
            );
    
            function getMousePos(canvasDom, mouseEvent) {
                var rect = canvasDom.getBoundingClientRect();
                return {
                x: mouseEvent.clientX - rect.left,
                y: mouseEvent.clientY - rect.top,
                };
            }
    
            function getTouchPos(canvasDom, touchEvent) {
                var rect = canvasDom.getBoundingClientRect();
                return {
                x: touchEvent.touches[0].clientX - rect.left,
                y: touchEvent.touches[0].clientY - rect.top,
                };
            }
    
            function renderCanvas() {
                if (drawing) {
                ctx.moveTo(lastPos.x, lastPos.y);
                ctx.lineTo(mousePos.x, mousePos.y);
                ctx.stroke();
                lastPos = mousePos;
                }
            }
    
            // Prevent scrolling when touching the canvas
            document.body.addEventListener(
                "touchstart",
                function (e) {
                if (e.target == canvas) {
                    e.preventDefault();
                }
                },
                false
            );
            document.body.addEventListener(
                "touchend",
                function (e) {
                if (e.target == canvas) {
                    e.preventDefault();
                }
                },
                false
            );
            document.body.addEventListener(
                "touchmove",
                function (e) {
                if (e.target == canvas) {
                    e.preventDefault();
                }
                },
                false
            );
    
            (function drawLoop() {
                requestAnimFrame(drawLoop);
                renderCanvas();
            })();
    
            function clearCanvas() {
                canvas.width = canvas.width;
            }
    
            // Set up the UI
            var sigText = document.getElementById("sig-dataUrl");
            var sigImage = document.getElementById("sig-image");
            let ew = document.querySelectorAll("[id='sig-clearBtn3']")
            try{
                ew[1].id = 'sig-clearBtn03'
            }
            catch{}
    
            var clearBtn = document.getElementById("sig-clearBtn03");
            clearBtn.addEventListener(
                "click",
                function (e) {
                clearCanvas();
                sigText.innerHTML = "Data URL for your signature will go here!";
                sigImage.setAttribute("src", "");
                },
                false
            );
      
        }
        function myFunction4(){
            (function () {
                window.requestAnimFrame = (function (callback) {
                  return (
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimaitonFrame ||
                    function (callback) {
                      window.setTimeout(callback, 1000 / 60);
                    }
                  );
                })();
            })
            var canvas = document.getElementById('sig-canvas04');
            var ctx = canvas.getContext("2d");
            ctx.strokeStyle = "#222222";
            ctx.lineWidth = 4;
    
            var drawing = false;
            var mousePos = {
                x: 0,
                y: 0,
            };
            var lastPos = mousePos;
    
            canvas.addEventListener(
                "mousedown",
                function (e) {
                drawing = true;
                lastPos = getMousePos(canvas, e);
                },
                false
            );
    
            canvas.addEventListener(
                "mouseup",
                function (e) {
                drawing = false;
                },
                false
            );
    
            canvas.addEventListener(
                "mousemove",
                function (e) {
                mousePos = getMousePos(canvas, e);
                },
                false
            );
    
            // Add touch event support for mobile
            canvas.addEventListener("touchstart", function (e) {}, false);
    
            canvas.addEventListener(
                "touchmove",
                function (e) {
                var touch = e.touches[0];
                var me = new MouseEvent("mousemove", {
                    clientX: touch.clientX,
                    clientY: touch.clientY,
                });
                canvas.dispatchEvent(me);
                },
                false
            );
    
            canvas.addEventListener(
                "touchstart",
                function (e) {
                mousePos = getTouchPos(canvas, e);
                var touch = e.touches[0];
                var me = new MouseEvent("mousedown", {
                    clientX: touch.clientX,
                    clientY: touch.clientY,
                });
                canvas.dispatchEvent(me);
                },
                false
            );
    
            canvas.addEventListener(
                "touchend",
                function (e) {
                var me = new MouseEvent("mouseup", {});
                canvas.dispatchEvent(me);
                },
                false
            );
    
            function getMousePos(canvasDom, mouseEvent) {
                var rect = canvasDom.getBoundingClientRect();
                return {
                x: mouseEvent.clientX - rect.left,
                y: mouseEvent.clientY - rect.top,
                };
            }
    
            function getTouchPos(canvasDom, touchEvent) {
                var rect = canvasDom.getBoundingClientRect();
                return {
                x: touchEvent.touches[0].clientX - rect.left,
                y: touchEvent.touches[0].clientY - rect.top,
                };
            }
    
            function renderCanvas() {
                if (drawing) {
                ctx.moveTo(lastPos.x, lastPos.y);
                ctx.lineTo(mousePos.x, mousePos.y);
                ctx.stroke();
                lastPos = mousePos;
                }
            }
    
            // Prevent scrolling when touching the canvas
            document.body.addEventListener(
                "touchstart",
                function (e) {
                if (e.target == canvas) {
                    e.preventDefault();
                }
                },
                false
            );
            document.body.addEventListener(
                "touchend",
                function (e) {
                if (e.target == canvas) {
                    e.preventDefault();
                }
                },
                false
            );
            document.body.addEventListener(
                "touchmove",
                function (e) {
                if (e.target == canvas) {
                    e.preventDefault();
                }
                },
                false
            );
    
            (function drawLoop() {
                requestAnimFrame(drawLoop);
                renderCanvas();
            })();
    
            function clearCanvas() {
                canvas.width = canvas.width;
            }
    
            // Set up the UI
            var sigText = document.getElementById("sig-dataUrl");
            // console.log('sigText', sigText);
            var sigImage = document.getElementById("sig-image");
            // console.log('sigImage', sigImage);

            let ew = document.querySelectorAll("[id='sig-clearBtn4']")
            try{
                ew[1].id = 'sig-clearBtn04'
            }
            catch{}
    
            var clearBtn = document.getElementById("sig-clearBtn04");
            // var submitBtn = document.getElementById("sig-submitBtn");
            clearBtn.addEventListener(
                "click",
                function (e) {
                clearCanvas();
                sigText.innerHTML = "Data URL for your signature will go here!";
                sigImage.setAttribute("src", "");
                },
                false
            );
 
        }
        //5
        (function () {
            window.requestAnimFrame = (function (callback) {
              return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimaitonFrame ||
                function (callback) {
                  window.setTimeout(callback, 1000 / 60);
                }
              );
            })();
        })
        var canvas = document.getElementById('sig-canvas05');
        // console.log(canvas,'teststts')
        var ctx = canvas.getContext("2d");
        ctx.strokeStyle = "#222222";
        ctx.lineWidth = 4;

        var drawing = false;
        var mousePos = {
            x: 0,
            y: 0,
        };
        var lastPos = mousePos;

        canvas.addEventListener(
            "mousedown",
            function (e) {
            drawing = true;
            lastPos = getMousePos(canvas, e);
            },
            false
        );

        canvas.addEventListener(
            "mouseup",
            function (e) {
            drawing = false;
            },
            false
        );

        canvas.addEventListener(
            "mousemove",
            function (e) {
            mousePos = getMousePos(canvas, e);
            },
            false
        );

        // Add touch event support for mobile
        canvas.addEventListener("touchstart", function (e) {}, false);

        canvas.addEventListener(
            "touchmove",
            function (e) {
            var touch = e.touches[0];
            var me = new MouseEvent("mousemove", {
                clientX: touch.clientX,
                clientY: touch.clientY,
            });
            canvas.dispatchEvent(me);
            },
            false
        );

        canvas.addEventListener(
            "touchstart",
            function (e) {
            mousePos = getTouchPos(canvas, e);
            var touch = e.touches[0];
            var me = new MouseEvent("mousedown", {
                clientX: touch.clientX,
                clientY: touch.clientY,
            });
            canvas.dispatchEvent(me);
            },
            false
        );

        canvas.addEventListener(
            "touchend",
            function (e) {
            var me = new MouseEvent("mouseup", {});
            canvas.dispatchEvent(me);
            },
            false
        );

        function getMousePos(canvasDom, mouseEvent) {
            var rect = canvasDom.getBoundingClientRect();
            return {
            x: mouseEvent.clientX - rect.left,
            y: mouseEvent.clientY - rect.top,
            };
        }

        function getTouchPos(canvasDom, touchEvent) {
            var rect = canvasDom.getBoundingClientRect();
            return {
            x: touchEvent.touches[0].clientX - rect.left,
            y: touchEvent.touches[0].clientY - rect.top,
            };
        }

        function renderCanvas() {
            if (drawing) {
            ctx.moveTo(lastPos.x, lastPos.y);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.stroke();
            lastPos = mousePos;
            }
        }

        // Prevent scrolling when touching the canvas
        document.body.addEventListener(
            "touchstart",
            function (e) {
            if (e.target == canvas) {
                e.preventDefault();
            }
            },
            false
        );
        document.body.addEventListener(
            "touchend",
            function (e) {
            if (e.target == canvas) {
                e.preventDefault();
            }
            },
            false
        );
        document.body.addEventListener(
            "touchmove",
            function (e) {
            if (e.target == canvas) {
                e.preventDefault();
            }
            },
            false
        );

        (function drawLoop() {
            requestAnimFrame(drawLoop);
            renderCanvas();
        })();

        function clearCanvas() {
            canvas.width = canvas.width;
        }

        // Set up the UI
        var sigText = document.getElementById("sig-dataUrl");
        // console.log('sigText', sigText);
        var sigImage = document.getElementById("sig-image");
        // console.log('sigImage', sigImage);

        let ew = document.querySelectorAll("[id='sig-clearBtn5']")
        try{
            ew[1].id = 'sig-clearBtn05'
        }
        catch{}

        var clearBtn = document.getElementById("sig-clearBtn05");
        // var submitBtn = document.getElementById("sig-submitBtn");
        clearBtn.addEventListener(
            "click",
            function (e) {
            clearCanvas();
            sigText.innerHTML = "Data URL for your signature will go here!";
            sigImage.setAttribute("src", "");
            },
            false
        );

        }catch{}
        
      

    

    }
 
}




function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

function CloseViewJson() {
    var oldField = document.querySelector('.fieldsetBody');
    var newViewField = document.querySelector('.fieldsetView');
    // console.log(oldField, newViewField);
    oldField.style.display = 'block';
    newViewField.style.display = 'none';
}

function saveJsonText(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}



function handleFileSelect(evt) {
    let files = evt.target.files; // FileList object

    // use the 1st file from the list
    let f = files[0];
    let jsonString;

    let reader = new FileReader();

    // Read in the image file as a data URL.
    reader.readAsText(f);
    reader.onload = function () {
        jsonString = reader.result;
        var JJJData = JSON.stringify(jsonString, undefined, 2);
        let obj = JSON.parse(jsonString);
        let length = obj.length;
        var count_sect = 0;
        if (checkYesNo) {
            radioartixArray[previewCloneNewId] = false;
        }previewCloneId
        let parentDropArea = document.querySelector("#parentDropAreaBox");
        for (let i = 1; i < obj.length; i++) {
            previewCloneNewId += 1;

            if (obj[i].id.replace(/[0-9]/g, "") == "sectionEle") {
                parentDropArea.innerHTML +=
                    `<div class="section-box" id="sectionEle` +
                    count_sect +
                    `">

            <div class="hover-space" id="hoverDemoTop"></div>
            <div class="formboxedit1">
              <a href="javascript:void(0)" class="icons settingIcon"
                onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
              <a href="javascript:void(0)" class="icons moveIcon"
                ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
              <a href="javascript:void(0)" class="icons pasteicon"><span
                  class="tooltiptext">Paste</span></a>
              <a href="javascript:void(0)" class="icons copyIcon"
                onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
              <a href="javascript:void(0)" class="icons deleteIcon"
                onclick="removeCurrentDiv(event)"><span
                  class="tooltiptext remove">Remove</span></a>
            </div>
            <div id="previewData">

              <div class="sectionTitle">
                <label class="d-flex legendbox  " id="sectionBox2">` +
                    obj[i].label +
                    `</label>
            </div>
            <div class="hover-space" id="hoverDemoSect"></div>
          </div>
        </div>`;
                var id_text = "sectionEle" + count_sect;
                var previewEle1 = document.getElementById(id_text);

                previewEle1.className = "section-box field-card";
               
                temp_top = document.createElement("div");
                temp_top.id = "topSectLane";
                previewEle1.appendChild(temp_top);
                temp_bot = document.createElement("div");
                temp_bot.id = "botSectLane";
                previewEle1.appendChild(temp_bot);

                previewEle1.querySelector(".sectionTitle").parentElement.style.border =
                    "1px dashed #999";
                previewEle1.querySelector(".sectionTitle").parentElement.style.padding =
                    "10px";
                previewEle1.querySelector(".sectionTitle").parentElement.style.top =
                    "25px";
                previewEle1.querySelector(".sectionTitle").id = "insertedSection";

                previewEle1.querySelector("#sectionBox2").id = "insertedSectionLabel";
                previewEle1.querySelector("#previewData").id = "sectData" + count_sect;

                for (let dict of obj[i].sectionData) {
                    if (dict.id.replace(/[0-9]/g, "") == "textFieldEle") {

                        if(dict.required) {
                            let text_elem = document.querySelector("#sectData" + count_sect);
                            text_elem.innerHTML +=
                                `
                        <div class="form-box field-card" id="textFieldEle">
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                            <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                            <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                            <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                            <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                            <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                        </div>
                        <div id="insertedData" style="flex-direction: column;">
                            <label id="insertedLabel" class="d-flex">` +
                                dict.label +
                                `<sup id="prevYesNo" >*</sup>
                                <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                                dict.placeholder +
                                `</span></i> </label>
                            <input type="text" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}"    
                            required="">
                        </div>
                        <div class="hover-space" id="hoverDemoBot"></div>
                    <div id="topLane"></div>
                    <div id="botLane"></div>
                    </div>                  
         `;
                            if (dict.required == true) {
                                text_elem
                                    .querySelector("#textFieldEle")
                                    .querySelector("input").required = "required";
                            }
                            text_elem.querySelector("#textFieldEle").id =
                                text_elem.querySelector("#textFieldEle").id + previewCloneNewId;
    
                        }else{
                            let text_elem = document.querySelector("#sectData" + count_sect);
                            text_elem.innerHTML +=
                                `
                        <div class="form-box field-card" id="textFieldEle">
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                            <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                            <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                            <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                            <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                            <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                        </div>
                        <div id="insertedData" style="flex-direction: column;">
                            <label id="insertedLabel" class="d-flex">` +
                                dict.label +
                                `<sup id="prevYesNo"  style="display: none;">*</sup>
                                <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                                dict.placeholder +
                                `</span></i> </label>
                            <input type="text" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}"    
                            required="">
                        </div>
                        <div class="hover-space" id="hoverDemoBot"></div>
                    <div id="topLane"></div>
                    <div id="botLane"></div>
                    </div>                  
         `;
                            if (dict.required == true) {
                                text_elem
                                    .querySelector("#textFieldEle")
                                    .querySelector("input").required = "required";
                            }
                            text_elem.querySelector("#textFieldEle").id =
                                text_elem.querySelector("#textFieldEle").id + previewCloneNewId;
    
                        }
                    }


                    else if (dict.id.replace(/[0-9]/g, "") == "dialogueEle") {
                        if(dict.required) {
                            let dialogue_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            dialogue_elem.innerHTML +=
                                `
                          <div class="form-box" id="dialogueEle">
                          <div class="hover-space" id="hoverDemoTop"></div>
                          <div class="formboxedit">
                          <a href="javascript:void(0)" class="icons settingIcon"
                              onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                          <a href="javascript:void(0)" class="icons moveIcon"
                              ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                              <a href="javascript:void(0)" class="icons pasteicon"><span
                                  class="tooltiptext">Paste</span></a>
                              <a href="javascript:void(0)" class="icons copyIcon"
                              onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                          <a href="javascript:void(0)" class="icons deleteIcon"
                              onclick="removeCurrentDiv(event)"><span
                                  class="tooltiptext remove">Remove</span></a>
                      </div>
                      <div id="insertedData" style="flex-direction: column;">
                      <label id="insertedLabel" class="d-flex">`+
                                dict.label +
                                `<sup id="prevYesNo"  >*</sup>
                      <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                                dict.placeholder +
                                `</span></i> </label>
                      <input type="text" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}"    
                      required="">
                  </div>
                  <div class="hover-space" id="hoverDemoBot"></div>
              <div id="topLane"></div>
              <div id="botLane"></div>
              </div>                  
      `  ;
                            if (dict.required == true) {
                                dialogue_elem
                                    .querySelector("#dialogueEle")
                                    .querySelector("input").required = "required";
                            }
                            dialogue_elem.querySelector("#dialogueEle").id =
                                dialogue_elem.querySelector("#dialogueEle").id + previewCloneNewId;
    
                        }else{
                            let dialogue_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            dialogue_elem.innerHTML +=
                                `
                          <div class="form-box" id="dialogueEle">
                          <div class="hover-space" id="hoverDemoTop"></div>
                          <div class="formboxedit">
                          <a href="javascript:void(0)" class="icons settingIcon"
                              onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                          <a href="javascript:void(0)" class="icons moveIcon"
                              ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                              <a href="javascript:void(0)" class="icons pasteicon"><span
                                  class="tooltiptext">Paste</span></a>
                              <a href="javascript:void(0)" class="icons copyIcon"
                              onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                          <a href="javascript:void(0)" class="icons deleteIcon"
                              onclick="removeCurrentDiv(event)"><span
                                  class="tooltiptext remove">Remove</span></a>
                      </div>
                      <div id="insertedData" style="flex-direction: column;">
                      <label id="insertedLabel" class="d-flex">`+
                                dict.label +
                                `<sup id="prevYesNo"  style="display: none;">*</sup>
                      <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                                dict.placeholder +
                                `</span></i> </label>
                      <input type="text" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}"    
                      required="">
                  </div>
                  <div class="hover-space" id="hoverDemoBot"></div>
              <div id="topLane"></div>
              <div id="botLane"></div>
              </div>                  
      `  ;
                            if (dict.required == true) {
                                dialogue_elem
                                    .querySelector("#dialogueEle")
                                    .querySelector("input").required = "required";
                            }
                            dialogue_elem.querySelector("#dialogueEle").id =
                                dialogue_elem.querySelector("#dialogueEle").id + previewCloneNewId;
    
                        }


                    }

                    else if (dict.id.replace(/[0-9]/g, "") == "numberEle") {
                        if(dict.required) {
                            let number_ele = document.querySelector("#sectData" + count_sect);
                            number_ele.innerHTML +=
                                `
                        <div class="form-box field-card" id="numberEle">
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                            <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                            <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                            <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                            <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                            <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                        </div>
                        <div id="insertedData" style="flex-direction: column;">
                            <label id="insertedLabel" class="d-flex">` +
                                dict.label + `<sup id="prevYesNo" >*</sup>
                                <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">`+
                                obj[i].placeholder +
                                `</span></i> </label>
                            <input type="number" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}"
                             required="">
                        </div>
                        <div class="hover-space" id="hoverDemoBot"></div>
                    <div id="topLane"></div>
                    <div id="botLane"></div>
                    </div>                  
         `;
                            if (dict.required == true) {
                                number_ele
                                    .querySelector("#numberEle")
                                    .querySelector("input").required = "required";
                            }
                            number_ele.querySelector("#numberEle").id =
                                number_ele.querySelector("#numberEle").id + previewCloneNewId;
    
                        }else{
                            let number_ele = document.querySelector("#sectData" + count_sect);
                            number_ele.innerHTML +=
                                `
                        <div class="form-box field-card" id="numberEle">
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                            <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                            <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                            <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                            <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                            <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                        </div>
                        <div id="insertedData" style="flex-direction: column;">
                            <label id="insertedLabel" class="d-flex">` +
                                dict.label + `<sup id="prevYesNo" style="display:none">*</sup>
                                <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">`+
                                obj[i].placeholder +
                                `</span></i> </label>
                            <input type="number" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}"
                             required="">
                        </div>
                        <div class="hover-space" id="hoverDemoBot"></div>
                    <div id="topLane"></div>
                    <div id="botLane"></div>
                    </div>                  
         `;
                            if (dict.required == true) {
                                number_ele
                                    .querySelector("#numberEle")
                                    .querySelector("input").required = "required";
                            }
                            number_ele.querySelector("#numberEle").id =
                                number_ele.querySelector("#numberEle").id + previewCloneNewId;
    
                        }
                    }

                    else if (dict.id.replace(/[0-9]/g, "") == "phoneEle") {
                        if(dict.required) {
                            let phone_elem = document.querySelector("#sectData" + count_sect);
                            phone_elem.innerHTML +=
                                `
                        <div class="form-box field-card" id="phoneEle">
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                            <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                            <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                            <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                            <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                            <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                        </div>
                        <div id="insertedData" style="flex-direction: column;">
                            <label id="insertedLabel" class="d-flex">` +
                                dict.label +
                                `<sup id="prevYesNo" >*</sup>
                                <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                                // dict.placeholder +
                                `</span></i> </label>
                            <input type="phone" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}" required="">
                        </div>
                        <div class="hover-space" id="hoverDemoBot"></div>
                    <div id="topLane"></div>
                    <div id="botLane"></div>
                    </div>                  
         `;
                            if (dict.required == true) {
                                phone_elem
                                    .querySelector("#phoneEle")
                                    .querySelector("input").required = "required";
                            }
                            phone_elem.querySelector("#phoneEle").id =
                                phone_elem.querySelector("#phoneEle").id + previewCloneNewId;
    
                        }else{
                            let phone_elem = document.querySelector("#sectData" + count_sect);
                            phone_elem.innerHTML +=
                                `
                        <div class="form-box field-card" id="phoneEle">
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                            <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                            <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                            <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                            <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                            <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                        </div>
                        <div id="insertedData" style="flex-direction: column;">
                            <label id="insertedLabel" class="d-flex">` +
                                dict.label +
                                `<sup id="prevYesNo"  style="display: none;">*</sup>
                                <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                                // dict.placeholder +
                                `</span></i> </label>
                            <input type="phone" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}" required="">
                        </div>
                        <div class="hover-space" id="hoverDemoBot"></div>
                    <div id="topLane"></div>
                    <div id="botLane"></div>
                    </div>                  
         `;
                            if (dict.required == true) {
                                phone_elem
                                    .querySelector("#phoneEle")
                                    .querySelector("input").required = "required";
                            }
                            phone_elem.querySelector("#phoneEle").id =
                                phone_elem.querySelector("#phoneEle").id + previewCloneNewId;
    
                        }
                    }

                    else if (dict.id.replace(/[0-9]/g, "") == "emailEle") {
                        if(dict.required) {
                            let email_elem = document.querySelector("#sectData" + count_sect);
                            email_elem.innerHTML +=
                                `
                        <div class="form-box field-card" id="emailEle">
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                            <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                            <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                            <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                            <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                            <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                        </div>
                        <div id="insertedData" style="flex-direction: column;">
                            <label id="insertedLabel" class="d-flex">` +
                                dict.label +
                                `<sup id="prevYesNo">*</sup>
                                <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                                dict.tooltip +
                                `</span></i> </label>
                            <input type="email" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}" required="">
                        </div>
                        <div class="hover-space" id="hoverDemoBot"></div>
                    <div id="topLane"></div>
                    <div id="botLane"></div>
                    </div>                  
         `;
                            if (dict.required == true) {
                                email_elem
                                    .querySelector("#emailEle")
                                    .querySelector("input").required = "required";
                            }
                            email_elem.querySelector("#emailEle").id =
                                email_elem.querySelector("#emailEle").id + previewCloneNewId;
    
                        }else{
                            let email_elem = document.querySelector("#sectData" + count_sect);
                            email_elem.innerHTML +=
                                `
                        <div class="form-box field-card" id="emailEle">
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                            <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                            <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                            <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                            <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                            <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                        </div>
                        <div id="insertedData" style="flex-direction: column;">
                            <label id="insertedLabel" class="d-flex">` +
                                dict.label +
                                `<sup id="prevYesNo"  style="display: none;">*</sup>
                                <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                                dict.tooltip +
                                `</span></i> </label>
                            <input type="email" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}" required="">
                        </div>
                        <div class="hover-space" id="hoverDemoBot"></div>
                    <div id="topLane"></div>
                    <div id="botLane"></div>
                    </div>                  
         `;
                            if (dict.required == true) {
                                email_elem
                                    .querySelector("#emailEle")
                                    .querySelector("input").required = "required";
                            }
                            email_elem.querySelector("#emailEle").id =
                                email_elem.querySelector("#emailEle").id + previewCloneNewId;
    
                        }
                    }

                    else if (dict.id.replace(/[0-9]/g, "") == "submitArea") {
                        if(dict.required) {
                            let submitArea_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            submitArea_elem.innerHTML +=
                                `
                        <div class="form-box field-card" id="submitArea">
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                            <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                            <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                            <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                            <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                            <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                        </div>
                        <div id="insertedData" style="flex-direction: column;">
                            <label id="insertedLabel" class="d-flex">` +
                                dict.label +
                                `<sup id="prevYesNo">*</sup>
                                <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                                dict.tooltip +
                                `</span></i> </label>
                            <textarea rows="5" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}" required=""></textarea>
                        </div>
                        <div class="hover-space" id="hoverDemoBot"></div>
                    <div id="topLane"></div>
                    <div id="botLane"></div>
                    </div> 
                                   
         `;
                            try {
                                if (dict.required == true) {
                                    submitArea_elem
                                        .querySelector("#submitArea")
                                        .querySelector("textarea").required = "required";
                                }
                                submitArea_elem.querySelector("#submitArea").id =
                                    submitArea_elem.querySelector("#submitArea").id +
                                    previewCloneNewId;
                            } catch (error) { }
    
                        }else{
                            let submitArea_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            submitArea_elem.innerHTML +=
                                `
                        <div class="form-box field-card" id="submitArea">
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                            <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                            <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                            <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                            <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                            <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                        </div>
                        <div id="insertedData" style="flex-direction: column;">
                            <label id="insertedLabel" class="d-flex">` +
                                dict.label +
                                `<sup id="prevYesNo"  style="display: none;">*</sup>
                                <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                                dict.tooltip +
                                `</span></i> </label>
                            <textarea rows="5" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}" required=""></textarea>
                        </div>
                        <div class="hover-space" id="hoverDemoBot"></div>
                    <div id="topLane"></div>
                    <div id="botLane"></div>
                    </div> 
                                   
         `;
                            try {
                                if (dict.required == true) {
                                    submitArea_elem
                                        .querySelector("#submitArea")
                                        .querySelector("textarea").required = "required";
                                }
                                submitArea_elem.querySelector("#submitArea").id =
                                    submitArea_elem.querySelector("#submitArea").id +
                                    previewCloneNewId;
                            } catch (error) { }
    
                        }
                    }

                    else if (dict.id.replace(/[0-9]/g, "") == "checkBoxEle") {
                        if(dict.required) {
                            let checkBox_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            checkBox_elem.innerHTML +=
                                `
                        <div class="form-box field-card" id="checkBoxEle">
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                            <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                            <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                            <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                            <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                            <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                        </div>
                        <div id="previewData" >
    
                        <div id="insertedData" style="display: flex;flex-direction:row;">
                        <input type="checkbox" class="checkbox requiredField" required="" id="insertedInput">
                        <label id="insertedLabel" class="d-flex">` +
                                dict.label +
                                `<sup id="prevYesNo">*</sup>
                <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                                dict.tooltip +
                                `</span></i> </label>
                        </div>
                        </div>
                        <div class="hover-space" id="hoverDemoBot"></div>
                    <div id="topLane"></div>
                    <div id="botLane"></div>
                    </div>                  
         `;
                            if (dict.required == true) {
                                checkBox_elem
                                    .querySelector("#checkBoxEle")
                                    .querySelector("input").required = "required";
                            }
                            checkBox_elem.querySelector("#checkBoxEle").id =
                                checkBox_elem.querySelector("#checkBoxEle").id +
                                previewCloneNewId;
    
                        }else{
                            let checkBox_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            checkBox_elem.innerHTML +=
                                `
                        <div class="form-box field-card" id="checkBoxEle">
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                            <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                            <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                            <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                            <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                            <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                        </div>
                        <div id="previewData" >
    
                        <div id="insertedData" style="display: flex;flex-direction:row;">
                        <input type="checkbox" class="checkbox requiredField" required="" id="insertedInput">
                        <label id="insertedLabel" class="d-flex">` +
                                dict.label +
                                `<sup id="prevYesNo"  style="display: none;">*</sup>
                <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                                dict.tooltip +
                                `</span></i> </label>
                        </div>
                        </div>
                        <div class="hover-space" id="hoverDemoBot"></div>
                    <div id="topLane"></div>
                    <div id="botLane"></div>
                    </div>                  
         `;
                            if (dict.required == true) {
                                checkBox_elem
                                    .querySelector("#checkBoxEle")
                                    .querySelector("input").required = "required";
                            }
                            checkBox_elem.querySelector("#checkBoxEle").id =
                                checkBox_elem.querySelector("#checkBoxEle").id +
                                previewCloneNewId;
    
                        }
                    }
                    else if (dict.id.replace(/[0-9]/g, "") == "buttonEle") {
                        // console.log("ID CHECK");
                        let button_elem = document.querySelector("#sectData" + count_sect);
                        button_elem.innerHTML +=
                            `
                    <div class="form-box field-card" id="buttonEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="insertedData" style="display:flex;flex-direction: row;">
                    <input type="` +
                            dict.inputType +
                            `" value="` +
                            dict.label +
                            `" class="btn primaryBtn" id="buttonBox2" style="padding:5px 10px;">
                    <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>                  
     `;
                        if (dict.buttonBlockStyle == false) {
                            document.querySelector("#buttonBox2").style.width =
                                "fit-content";
                        }
                        if (dict.required == true) {
                            button_elem
                                .querySelector("#buttonEle")
                                .querySelector("input").required = "required";
                        }
                        button_elem.querySelector("#buttonEle").id =
                            button_elem.querySelector("#buttonEle").id + previewCloneNewId;
                        document.querySelector("#buttonBox2").id = "insertedButton";
                    }
                    else if (dict.id.replace(/[0-9]/g, "") == "selectBoxEle") {
                        if(dict.required) {
                            let selectBox_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            selectBox_elem.innerHTML +=
                                `
                        <div class="form-box field-card" id="selectBoxEle">
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                            <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                            <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                            <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                            <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                            <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                        </div>
                        <div id="insertedData" style="flex-direction: column;">
                        <label class="d-flex " id="insertedLabel">` +
                                dict.label +
                                ` <sup id="prevYesNo">*</sup> <i class="Questionicons f-left">
                        <span class="R-st" id="insertedTooltip">` +
                                dict.tooltip +
                                `</span></i></label>
                        <select class="form-control requiredField" id="currentInput" >
                        <!-- <option id="previewRow0"></option> 
                        </select>
                        <div class="hover-space" id="hoverDemoBot"></div>
                        <div id="topLane"></div>
                        <div id="botLane"></div>
                        </div>`;
    
                            let j = 0;
                            for (var propName in dict.selectData) {
                                document.querySelector("#currentInput").innerHTML +=
                                    `<option id="previewRow` +
                                    j +
                                    `" value ='` +
                                    dict.selectData[propName] +
                                    `'">` +
                                    propName +
                                    `</option>`;
                                j += 1;
                            }
                            document.querySelector("#currentInput").id = "insertedInput";
    
                            selectBox_elem.querySelector("#selectBoxEle").id =
                                selectBox_elem.querySelector("#selectBoxEle").id +
                                previewCloneNewId;
    
                        }else{
                            let selectBox_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            selectBox_elem.innerHTML +=
                                `
                        <div class="form-box field-card" id="selectBoxEle">
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                            <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                            <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                            <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                            <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                            <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                        </div>
                        <div id="insertedData" style="flex-direction: column;">
                        <label class="d-flex " id="insertedLabel">` +
                                dict.label +
                                ` <sup id="prevYesNo"  style="display: none;">*</sup> <i class="Questionicons f-left">
                        <span class="R-st" id="insertedTooltip">` +
                                dict.tooltip +
                                `</span></i></label>
                        <select class="form-control requiredField" id="currentInput" >
                        <!-- <option id="previewRow0"></option> 
                        </select>
                        <div class="hover-space" id="hoverDemoBot"></div>
                        <div id="topLane"></div>
                        <div id="botLane"></div>
                        </div>`;
    
                            let j = 0;
                            for (var propName in dict.selectData) {
                                document.querySelector("#currentInput").innerHTML +=
                                    `<option id="previewRow` +
                                    j +
                                    `" value ='` +
                                    dict.selectData[propName] +
                                    `'">` +
                                    propName +
                                    `</option>`;
                                j += 1;
                            }
                            document.querySelector("#currentInput").id = "insertedInput";
    
                            selectBox_elem.querySelector("#selectBoxEle").id =
                                selectBox_elem.querySelector("#selectBoxEle").id +
                                previewCloneNewId;
    
                        }
                    }
                    else if (dict.id.replace(/[0-9]/g, "") == "radioEle") {
                        if(dict.required) {
                            let radio_elem = document.querySelector("#sectData" + count_sect);
                            radio_elem.innerHTML +=
                                `
                        <div class="form-box field-card" id="radioEle">
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                            <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                            <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                            <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                            <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                            <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                        </div>
        
                        <div id="insertedData" style="flex-direction: column;">
                        <label class="d-flex " id="insertedLabel">` +
                                dict.label +
                                ` 
                        <sup id="prevYesNo">*</sup> <i class="Questionicons f-left">
                        <span class="R-st" id="insertedTooltip">` +
                                dict.tooltip +
                                `</span></i></label>
                        <div class="requiredField" id="currentInput" style="vertical-align: text-top;" >
                        <!-- <option id="previewRow0"></option> 
                        </div>
        
                        <div class="hover-space" id="hoverDemoBot"></div>
                        <div id="topLane"></div>
                        <div id="botLane"></div>
                        </div>`;
    
                            let j = 0;
                            for (var propName in dict.radioData) {
                                document.querySelector("#currentInput").innerHTML +=
                                    `<input type=radio name='` +
                                    dict.radioName +
                                    `' id="radioPrevRow` +
                                    j +
                                    `" value ='` +
                                    propName +
                                    `'>` +
                                    `<label>${dict.radioData[propName]}</label>
                                    </option>`;
                                j += 1;
                            }
                            document.querySelector("#currentInput").id = "insertedInput";
    
                            radio_elem.querySelector("#radioEle").id =
                                radio_elem.querySelector("#radioEle").id + previewCloneNewId;
    
                        }else{
                            let radio_elem = document.querySelector("#sectData" + count_sect);
                            radio_elem.innerHTML +=
                                `
                        <div class="form-box field-card" id="radioEle">
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                            <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                            <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                            <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                            <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                            <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                        </div>
        
                        <div id="insertedData" style="flex-direction: column;">
                        <label class="d-flex " id="insertedLabel">` +
                                dict.label +
                                ` 
                        <sup id="prevYesNo"  style="display: none;">*</sup> <i class="Questionicons f-left">
                        <span class="R-st" id="insertedTooltip">` +
                                dict.tooltip +
                                `</span></i></label>
                        <div class="requiredField" id="currentInput" style="vertical-align: text-top;" >
                        <!-- <option id="previewRow0"></option> 
                        </div>
        
                        <div class="hover-space" id="hoverDemoBot"></div>
                        <div id="topLane"></div>
                        <div id="botLane"></div>
                        </div>`;
    
                            let j = 0;
                            for (var propName in dict.radioData) {
                                document.querySelector("#currentInput").innerHTML +=
                                    `<input type=radio name='` +
                                    dict.radioName +
                                    `' id="radioPrevRow` +
                                    j +
                                    `" value ='` +
                                    propName +
                                    `'>` +
                                    `<label>${dict.radioData[propName]}</label>
                                    </option>`;
                                j += 1;
                            }
                            document.querySelector("#currentInput").id = "insertedInput";
    
                            radio_elem.querySelector("#radioEle").id =
                                radio_elem.querySelector("#radioEle").id + previewCloneNewId;
    
                        }
                    }
                    else if (dict.id.replace(/[0-9]/g, "") == "urlFieldEle") {
                        if(dict.required) {
                            let urlField_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            urlField_elem.innerHTML +=
                                `<div class="form-box" id="urlFieldEle">
        
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon"
                        onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon"
                        ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span
                            class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon"
                        onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon"
                        onclick="removeCurrentDiv(event)"><span
                            class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="previewData">
                    <label id="linkSecond" class="d-flex">` +
                                dict.label +
                                ` 
                                <sup id="prevYesNo" >*</sup> <i class="Questionicons f-left">
                                <span class="R-st" id="insertedTooltip">`  +
    
                                `</span></i> </label>
                    <input type="text" class="form-control requiredField" id="urlSecond"
                    placeholder="${dict.placeholder}" required="" />
                        </div>
                        <div class="hover-space" id="hoverDemoBot"></div>
                    </div>`;
                            if (dict.required == true) {
                                urlField_elem
                                    .querySelector("#urlFieldEle")
                                    .querySelector("input").required = "required";
                            }
                            urlField_elem.querySelector("#urlFieldEle").id =
                                urlField_elem.querySelector("#urlFieldEle").id + previewCloneNewId;
    
                        }else{
                            let urlField_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            urlField_elem.innerHTML +=
                                `<div class="form-box" id="urlFieldEle">
        
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon"
                        onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon"
                        ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span
                            class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon"
                        onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon"
                        onclick="removeCurrentDiv(event)"><span
                            class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="previewData">
                    <label id="linkSecond" class="d-flex">` +
                                dict.label +
                                ` 
                                <sup id="prevYesNo" style="display:none">*</sup> <i class="Questionicons f-left">
                                <span class="R-st" id="insertedTooltip">`  +
    
                                `</span></i> </label>
                    <input type="text" class="form-control requiredField" id="urlSecond"
                    placeholder="${dict.placeholder}" required="" />
                        </div>
                        <div class="hover-space" id="hoverDemoBot"></div>
                    </div>`;
                            if (dict.required == true) {
                                urlField_elem
                                    .querySelector("#urlFieldEle")
                                    .querySelector("input").required = "required";
                            }
                            urlField_elem.querySelector("#urlFieldEle").id =
                                urlField_elem.querySelector("#urlFieldEle").id + previewCloneNewId;
    
                        }
                    }

                    else if (dict.id.replace(/[0-9]/g, "") == "dateAndTimeEle") {
                        if(dict.required) {
                            let date_elem = document.querySelector("#sectData" + count_sect);
                            date_elem.innerHTML +=
                                `<div class="form-box" id="dateAndTimeEle">
        
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon"
                        onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon"
                        ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span
                            class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon"
                        onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon"
                        onclick="removeCurrentDiv(event)"><span
                            class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="previewData">
                    <label id="dateAndTime2" class="d-flex">` +
                                dict.label +
                                ` 
                    <sup id="prevYesNo">*</sup> <i class="Questionicons f-left">
                    <span class="R-st" id="insertedTooltip">` +
    
                                `</span></i> </label> <input id="dt" class="form-control requiredField"  type="datetime-local" />
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            </div>
        </div>`;
                            if (dict.required == true) {
                                date_elem
                                    .querySelector("#dateAndTimeEle")
                                    .querySelector("input").required = "required";
                            }
                            date_elem.querySelector("#dateAndTimeEle").id =
                                date_elem.querySelector("#dateAndTimeEle").id + previewCloneNewId;
    
                        }else{
                            let date_elem = document.querySelector("#sectData" + count_sect);
                            date_elem.innerHTML +=
                                `<div class="form-box" id="dateAndTimeEle">
        
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon"
                        onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon"
                        ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span
                            class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon"
                        onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon"
                        onclick="removeCurrentDiv(event)"><span
                            class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="previewData">
                    <label id="dateAndTime2" class="d-flex">` +
                                dict.label +
                                ` 
                    <sup id="prevYesNo" style="display:none">*</sup> <i class="Questionicons f-left">
                    <span class="R-st" id="insertedTooltip">` +
    
                                `</span></i> </label> <input id="dt" class="form-control requiredField"  type="datetime-local" />
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            </div>
        </div>`;
                            if (dict.required == true) {
                                date_elem
                                    .querySelector("#dateAndTimeEle")
                                    .querySelector("input").required = "required";
                            }
                            date_elem.querySelector("#dateAndTimeEle").id =
                                date_elem.querySelector("#dateAndTimeEle").id + previewCloneNewId;
    
                        }
                    }

                    else if (dict.id.replace(/[0-9]/g, "") == "titleBoxEle") {
                        if(dict.required) {
                            let titleBox_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            titleBox_elem.innerHTML +=
                                `<div class="form-box checkbox" id="titleBoxEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                  <a href="javascript:void(0)" class="icons settingIcon"
                    onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                  <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span
                      class="tooltiptext">Move</span></a>
                  <a href="javascript:void(0)" class="icons pasteicon"><span
                      class="tooltiptext">Paste</span></a>
                  <a href="javascript:void(0)" class="icons copyIcon"
                    onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                  <!-- <a href="javascript:void(0)" class="icons wrenchIcon" onclick="createJSON(event)"><span class="tooltiptext">Edit JSON</span></a> -->
                  <a href="javascript:void(0)" class="icons deleteIcon"
                    onclick="removeCurrentDiv(event)"><span
                      class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="previewData" >
                  <div >
        
                
                  <h1 ><label id="titleBox2"
                   class="d-flex" style="font-size: 20px !important;font-weight:550;">` +
                                dict.label +
                                `<sup id="prevYesNo" >*</sup>
                                <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                                dict.placeholder +
                                `</span></i></label></h1>
                <input type="text" style="display: none;" class="checkbox requiredField" required />
               </div>
             </div>
        
             <div class="hover-space" id="hoverDemoBot"></div>
           </div>
         </div>`;
                            if (dict.required == true) {
                                titleBox_elem
                                    .querySelector("#titleBoxEle")
                                    .querySelector("input").required = "required";
                            }
                            titleBox_elem.querySelector("#titleBoxEle").id =
                                titleBox_elem.querySelector("#titleBoxEle").id + previewCloneNewId;
    
                        }else{
                            let titleBox_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            titleBox_elem.innerHTML +=
                                `<div class="form-box checkbox" id="titleBoxEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                  <a href="javascript:void(0)" class="icons settingIcon"
                    onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                  <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span
                      class="tooltiptext">Move</span></a>
                  <a href="javascript:void(0)" class="icons pasteicon"><span
                      class="tooltiptext">Paste</span></a>
                  <a href="javascript:void(0)" class="icons copyIcon"
                    onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                  <!-- <a href="javascript:void(0)" class="icons wrenchIcon" onclick="createJSON(event)"><span class="tooltiptext">Edit JSON</span></a> -->
                  <a href="javascript:void(0)" class="icons deleteIcon"
                    onclick="removeCurrentDiv(event)"><span
                      class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="previewData" >
                  <div >
        
                
                  <h1 ><label id="titleBox2"
                   class="d-flex" style="font-size: 20px !important;font-weight:550;">` +
                                dict.label +
                                `<sup id="prevYesNo"  style="display: none;">*</sup>
                                <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                                dict.placeholder +
                                `</span></i></label></h1>
                <input type="text" style="display: none;" class="checkbox requiredField" required />
               </div>
             </div>
        
             <div class="hover-space" id="hoverDemoBot"></div>
           </div>
         </div>`;
                            if (dict.required == true) {
                                titleBox_elem
                                    .querySelector("#titleBoxEle")
                                    .querySelector("input").required = "required";
                            }
                            titleBox_elem.querySelector("#titleBoxEle").id =
                                titleBox_elem.querySelector("#titleBoxEle").id + previewCloneNewId;
    
                        }
                    }



                    else if (dict.id.replace(/[0-9]/g, "") == "promiseEle") {
                        if(dict.required) {
                            let titleBox_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            titleBox_elem.innerHTML += `<div class="form-box" id="promiseEle">
                            <div class="hover-space" id="hoverDemoTop"></div>
                            <div class="formboxedit">
                            <a href="javascript:void(0)" class="icons settingIcon"
                                onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                            <a href="javascript:void(0)" class="icons moveIcon"
                                ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                                <a href="javascript:void(0)" class="icons pasteicon"><span
                                    class="tooltiptext">Paste</span></a>
                                <a href="javascript:void(0)" class="icons copyIcon"
                                onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                            <a href="javascript:void(0)" class="icons deleteIcon"
                                onclick="removeCurrentDiv(event)"><span
                                    class="tooltiptext remove">Remove</span></a>
                        </div>
                        <div id="insertedData" style="flex-direction: column;">
                        <label id="insertedLabel" class="d-flex">` + dict.label +
                                `<sup id="prevYesNo" >*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                                dict.tooltip +
                                `</span></i> </label>
                        <textarea class="form-control requiredField" id="insertedInput"  value='[{
                            "type": "select",
                            ....,
                            dataSrc: async () => {
                            return await fetch("/api/somepath").then((data) => data.json())
                            },
                            ....
                            }]'
                        placeholder="${dict.placeholder}" required="" >	[{
                            "type": "select",
                            ....,
                            dataSrc: async () => {
                            return await fetch("/api/somepath").then((data) => data.json())
                            },
                            ....
                            }]</textarea>  
                        </div>
                        <div class="hover-space" id="hoverDemoBot"></div>
                    <div id="topLane"></div>
                    <div id="botLane"></div>
                    </div>        
                            `;
    
    
                        }else{
                            let titleBox_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            titleBox_elem.innerHTML += `<div class="form-box" id="promiseEle">
                            <div class="hover-space" id="hoverDemoTop"></div>
                            <div class="formboxedit">
                            <a href="javascript:void(0)" class="icons settingIcon"
                                onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                            <a href="javascript:void(0)" class="icons moveIcon"
                                ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                                <a href="javascript:void(0)" class="icons pasteicon"><span
                                    class="tooltiptext">Paste</span></a>
                                <a href="javascript:void(0)" class="icons copyIcon"
                                onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                            <a href="javascript:void(0)" class="icons deleteIcon"
                                onclick="removeCurrentDiv(event)"><span
                                    class="tooltiptext remove">Remove</span></a>
                        </div>
                        <div id="insertedData" style="flex-direction: column;">
                        <label id="insertedLabel" class="d-flex">` + dict.label +
                                `<sup id="prevYesNo"  style="display: none;">*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                                dict.tooltip +
                                `</span></i> </label>
                        <textarea class="form-control requiredField" id="insertedInput"  value='[{
                            "type": "select",
                            ....,
                            dataSrc: async () => {
                            return await fetch("/api/somepath").then((data) => data.json())
                            },
                            ....
                            }]'
                        placeholder="${dict.placeholder}" required="" >	[{
                            "type": "select",
                            ....,
                            dataSrc: async () => {
                            return await fetch("/api/somepath").then((data) => data.json())
                            },
                            ....
                            }]</textarea>  
                        </div>
                        <div class="hover-space" id="hoverDemoBot"></div>
                    <div id="topLane"></div>
                    <div id="botLane"></div>
                    </div>        
                            `;
    
    
                        }
                    }
                    else if (dict.id.replace(/[0-9]/g, "") == "videoembedEle") {
                        if(dict.required) {
                            let video_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            video_elem.innerHTML +=
                                `<div class="form-box" id="videoembedEle">
                            <div class="hover-space" id="hoverDemoTop"></div>
                            <div class="formboxedit">
                                <a href="javascript:void(0)" class="icons settingIcon"
                                    onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                                <a href="javascript:void(0)" class="icons moveIcon"
                                    ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                                <a href="javascript:void(0)" class="icons pasteicon"><span
                                        class="tooltiptext">Paste</span></a>
                                <a href="javascript:void(0)" class="icons copyIcon"
                                    onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                                <a href="javascript:void(0)" class="icons deleteIcon"
                                    onclick="removeCurrentDiv(event)"><span
                                        class="tooltiptext remove">Remove</span></a>
                            </div>
                            <div id="previewData">
                            <label id="insertedLabel" class="d-flex">${dict.label}
                            <sup id="prevYesNo" 
                    class="prevDat">*</sup>
                <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                        to add Document </span></i> </label>
                        <iframe id="insertedInput" class="videoSet" src="`+ dict.videoSRC + `"  >
                        </iframe>
    
                        </div>
                        <div class="hover-space" id="hoverDemoSect"></div>
                      </div>
                      
    
    
                    
                    `;
                            try {
    
                                if (dict.required == true) {
                                    parentDropArea
                                        .querySelector("#videoembedEle")
                                        .querySelector("input").required = "required";
                                }
                                parentDropArea.querySelector("#videoembedEle").id =
                                    parentDropArea.querySelector("#videoembedEle").id +
                                    previewCloneNewId;
                            } catch (error) { }
    
                        }else{
                            let video_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            video_elem.innerHTML +=
                                `<div class="form-box" id="videoembedEle">
                            <div class="hover-space" id="hoverDemoTop"></div>
                            <div class="formboxedit">
                                <a href="javascript:void(0)" class="icons settingIcon"
                                    onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                                <a href="javascript:void(0)" class="icons moveIcon"
                                    ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                                <a href="javascript:void(0)" class="icons pasteicon"><span
                                        class="tooltiptext">Paste</span></a>
                                <a href="javascript:void(0)" class="icons copyIcon"
                                    onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                                <a href="javascript:void(0)" class="icons deleteIcon"
                                    onclick="removeCurrentDiv(event)"><span
                                        class="tooltiptext remove">Remove</span></a>
                            </div>
                            <div id="previewData">
                            <label id="insertedLabel" class="d-flex">${dict.label}
                            <sup id="prevYesNo"  style="display: none;"
                    class="prevDat">*</sup>
                <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                        to add Document </span></i> </label>
                        <iframe id="insertedInput" class="videoSet" src="`+ dict.videoSRC + `"  >
                        </iframe>
    
                        </div>
                        <div class="hover-space" id="hoverDemoSect"></div>
                      </div>
                      
    
    
                    
                    `;
                            try {
    
                                if (dict.required == true) {
                                    parentDropArea
                                        .querySelector("#videoembedEle")
                                        .querySelector("input").required = "required";
                                }
                                parentDropArea.querySelector("#videoembedEle").id =
                                    parentDropArea.querySelector("#videoembedEle").id +
                                    previewCloneNewId;
                            } catch (error) { }
    
                        }




                    }
                    //karthika-table
                    else if (dict.id.replace(/[0-9]/g, "") == "tableEle") {
                        if(dict.required) {
                            let table_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            table_elem.innerHTML +=
                                `<div class="form-box" id="tableEle"> 
                            <div class="hover-space" id="hoverDemoTop"></div> 
            <div class="formboxedit">
            <a href="javascript:void(0)" class="icons settingIcon"
                onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
            <a href="javascript:void(0)" class="icons moveIcon"
                ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
            <a href="javascript:void(0)" class="icons pasteicon"><span
                    class="tooltiptext">Paste</span></a>
            <a href="javascript:void(0)" class="icons copyIcon"
                onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
            <a href="javascript:void(0)" class="icons deleteIcon"
                onclick="removeCurrentDiv(event)"><span
                    class="tooltiptext remove">Remove</span></a>
                 </div>
                 <div id="previewData">
                 <label id="insertedLable" class="d-flex">${dict.label}
                 <sup id="prevYesNo" 
                 class="prevDat">*</sup>
             <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                     to add Document </span></i> </label>
                     <samp id="insertedInput" class="tableStyle" accept="">${dict.table}</samp>
                     </div>
                     <div class="hover-space" id="hoverDemoSect"></div>
             
                 </div>
    
    
                            `;
                            try {
    
                                if (dict.required == true) {
                                    parentDropArea
                                        .querySelector("#tableEle")
                                        .querySelector("input").required = "required";
                                }
                                parentDropArea.querySelector("#tableEle").id =
                                    parentDropArea.querySelector("#tableEle").id +
                                    previewCloneNewId;
                            } catch (error) { }
    
    
                        }else{
                            let table_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            table_elem.innerHTML +=
                                `<div class="form-box" id="tableEle"> 
                            <div class="hover-space" id="hoverDemoTop"></div> 
            <div class="formboxedit">
            <a href="javascript:void(0)" class="icons settingIcon"
                onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
            <a href="javascript:void(0)" class="icons moveIcon"
                ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
            <a href="javascript:void(0)" class="icons pasteicon"><span
                    class="tooltiptext">Paste</span></a>
            <a href="javascript:void(0)" class="icons copyIcon"
                onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
            <a href="javascript:void(0)" class="icons deleteIcon"
                onclick="removeCurrentDiv(event)"><span
                    class="tooltiptext remove">Remove</span></a>
                 </div>
                 <div id="previewData">
                 <label id="insertedLable" class="d-flex">${dict.label}
                 <sup id="prevYesNo"  style="display: none;"
                 class="prevDat">*</sup>
             <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                     to add Document </span></i> </label>
                     <samp id="insertedInput" class="tableStyle" accept="">${dict.table}</samp>
                     </div>
                     <div class="hover-space" id="hoverDemoSect"></div>
             
                 </div>
    
    
                            `;
                            try {
    
                                if (dict.required == true) {
                                    parentDropArea
                                        .querySelector("#tableEle")
                                        .querySelector("input").required = "required";
                                }
                                parentDropArea.querySelector("#tableEle").id =
                                    parentDropArea.querySelector("#tableEle").id +
                                    previewCloneNewId;
                            } catch (error) { }
    
    
                        }
                    }
                    //karthika-image
                    else if (dict.id.replace(/[0-9]/g, "") == "imageFieldEle") {
                        if(dict.required) {
                            let image_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            image_elem.innerHTML += `
                        <div class="form-box imageinput" id="imageFieldEle">
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon"
                            onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon"
                            ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon"
                            onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon"
                            onclick="removeCurrentDiv(event)"><span
                                class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="previewData">
                    <div class="form-box imageUpload">
                
                    <input type="file" accept="image/*" name="upload" value="Upload Image" id="setFile"
                        onchange="PlaceHolderImage(event)" />
                </div>
                    <label id="insertedLabel" class="d-flex">${dict.label}<sup id="prevYesNo"  
                    class="prevDat">*</sup>
                <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                        to add Document </span></i> </label>
                        <img id="insertedImage" src="` +
                                dict.imgSRC +
    
                                ` alt="Submit" width="200"">
                    
                                            </div>
                                            <div class="hover-space" id="hoverDemoSect"></div>
                                          </div>
                        
                        
                        
                        `;
                            try {
    
                                if (dict.required == true) {
                                    parentDropArea
                                        .querySelector("#imageFieldEle")
                                        .querySelector("input").required = "required";
                                }
                                parentDropArea.querySelector("#imageFieldEle").id =
                                    parentDropArea.querySelector("#imageFieldEle").id +
                                    previewCloneNewId;
                            } catch (error) { }
    
                        }else{
                            let image_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            image_elem.innerHTML += `
                        <div class="form-box imageinput" id="imageFieldEle">
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon"
                            onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon"
                            ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon"
                            onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon"
                            onclick="removeCurrentDiv(event)"><span
                                class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="previewData">
                    <div class="form-box imageUpload">
                
                    <input type="file" accept="image/*" name="upload" value="Upload Image" id="setFile"
                        onchange="PlaceHolderImage(event)" />
                </div>
                    <label id="insertedLabel" class="d-flex">${dict.label}<sup id="prevYesNo"  style="display: none;"
                    class="prevDat">*</sup>
                <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                        to add Document </span></i> </label>
                        <img id="insertedImage" src="` +
                                dict.imgSRC +
    
                                ` alt="Submit" width="200"">
                    
                                            </div>
                                            <div class="hover-space" id="hoverDemoSect"></div>
                                          </div>
                        
                        
                        
                        `;
                            try {
    
                                if (dict.required == true) {
                                    parentDropArea
                                        .querySelector("#imageFieldEle")
                                        .querySelector("input").required = "required";
                                }
                                parentDropArea.querySelector("#imageFieldEle").id =
                                    parentDropArea.querySelector("#imageFieldEle").id +
                                    previewCloneNewId;
                            } catch (error) { }
    
                        }

                    }
                    //karthika-signature
                    else if (dict.id.replace(/[0-9]/g, "") == "signatureEle") {
                        if(dict.required) {
                            let signature_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            signature_elem.innerHTML +=
                                `
                        <div class="form-box" id="signatureEle"> 
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon"
                            onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon"
                            ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span
                                class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon"
                            onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon"
                            onclick="removeCurrentDiv(event)"><span
                                class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="previewData">
                    <label id="signBox2" class="d-flex">${dict.label}<sup id="prevYesNo" 
                    class="prevDat">*</sup>
                <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                        to add Document </span></i> </label>
            
                        <div class="row">
                        <div class="col-md-12">
                          <canvas id="sig-canvas" width="220" height="60">
                            Get a better browser, bro.
                          </canvas></div>
            
                          <div class="row">
                          <div class="col-md-12">
                            <button class="btn btn-primary" id="sig-submitBtn" style="padding: 5px 10px">Submit Signature </button>
                            <button class="btn btn-default" id="sig-clearBtn" style="padding: 5px 10px"> Clear Signature </button>
                          </div>
                        </div>
                        <br />
                        <div class="row">
                        <div class="col-md-12">
                          <input type="text" id="sig-dataUrl" style="display: none"  class="form-control" rows="5"/>
                        </div>
                      </div>
                      <br />
                      <div class="row" style="display:none">
                      <div class="col-md-12">
                      id="sig-image" 
                      class="requiredField"
                      src="` +
                      dict.imgSRC +
            
                      ` alt="Your signature will go here!""
                      >
            
                      </div>
                      </div>
                    </div>
                         <div class="hover-space" id="hoverDemoSect"></div>
            
    
                      </div>
                        `;
                        try {
    
                            if (dict.required == true) {
                                parentDropArea
                                    .querySelector("#signatureEle")
                                    .querySelector("input").required = "required";
                            }
                            parentDropArea.querySelector("#signatureEle").id =
                                parentDropArea.querySelector("#signatureEle").id +
                                previewCloneNewId;
                        } catch (error) { }
    
    
                        }else{
                            let signature_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            signature_elem.innerHTML +=
                                `
                        <div class="form-box" id="signatureEle"> 
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon"
                            onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon"
                            ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span
                                class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon"
                            onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon"
                            onclick="removeCurrentDiv(event)"><span
                                class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="previewData">
                    <label id="signBox2" class="d-flex">${dict.label}<sup id="prevYesNo"  style="display: none;"
                    class="prevDat">*</sup>
                <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                        to add Document </span></i> </label>
            
                        <div class="row">
                        <div class="col-md-12">
                          <canvas id="sig-canvas" width="220" height="60">
                            Get a better browser, bro.
                          </canvas></div>
            
                          <div class="row">
                          <div class="col-md-12">
                            <button class="btn btn-primary" id="sig-submitBtn" style="padding: 5px 10px">Submit Signature </button>
                            <button class="btn btn-default" id="sig-clearBtn" style="padding: 5px 10px"> Clear Signature </button>
                          </div>
                        </div>
                        <br />
                        <div class="row">
                        <div class="col-md-12">
                          <input type="text" id="sig-dataUrl" style="display: none"  class="form-control" rows="5"/>
                        </div>
                      </div>
                      <br />
                      <div class="row" style="display:none">
                      <div class="col-md-12">
                      id="sig-image" 
                      class="requiredField"
                      src="` +
                      dict.imgSRC +
            
                      ` alt="Your signature will go here!""
                      >
            
                      </div>
                      </div>
                    </div>
                         <div class="hover-space" id="hoverDemoSect"></div>
            
    
                      </div>
                        `;
                        try {
    
                            if (dict.required == true) {
                                parentDropArea
                                    .querySelector("#signatureEle")
                                    .querySelector("input").required = "required";
                            }
                            parentDropArea.querySelector("#signatureEle").id =
                                parentDropArea.querySelector("#signatureEle").id +
                                previewCloneNewId;
                        } catch (error) { }
    
    
                        }
                    }


                    else if (dict.id.replace(/[0-9]/g, "") == "documentEle") {
                        if(dict.required) {
                            let dialogue_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            dialogue_elem.innerHTML += `<div class="form-box checkbox" id="documentEle">
        
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                  <a href="javascript:void(0)" class="icons settingIcon"
                    onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                  <a href="javascript:void(0)" class="icons moveIcon"
                    ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                  <a href="javascript:void(0)" class="icons copyIcon"
                    onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                  <!-- <a href="javascript:void(0)" class="icons wrenchIcon" onclick="createJSON(event)"><span class="tooltiptext">Edit JSON</span></a> -->
                  <a href="javascript:void(0)" class="icons deleteIcon"
                  onclick="removeCurrentDiv(event)"><span
                      class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="previewData">
                <label id="insertedLabel" class="d-flex">${dict.label}<sup id="prevYesNo"  style="display: none;"
                class="prevDat">*</sup>
            <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                    to add Document </span></i> </label>
                <input type="file" class="btn primaryBtn document" id="insertedInput" accept="${dict.documentType}" onchange="openFile(event)">
                <!-- <button onclick="doupload()" name="submit">Upload File</button> -->
              </div>
                <div class="hover-space" id="hoverDemoSect"></div>
              </div>`;
    
                        }else{
                            let dialogue_elem = document.querySelector(
                                "#sectData" + count_sect
                            );
                            dialogue_elem.innerHTML += `<div class="form-box checkbox" id="documentEle">
        
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                  <a href="javascript:void(0)" class="icons settingIcon"
                    onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                  <a href="javascript:void(0)" class="icons moveIcon"
                    ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                  <a href="javascript:void(0)" class="icons copyIcon"
                    onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                  <!-- <a href="javascript:void(0)" class="icons wrenchIcon" onclick="createJSON(event)"><span class="tooltiptext">Edit JSON</span></a> -->
                  <a href="javascript:void(0)" class="icons deleteIcon"
                  onclick="removeCurrentDiv(event)"><span
                      class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="previewData">
                <label id="insertedLabel" class="d-flex">${dict.label}<sup id="prevYesNo"  style="display: none;"
                class="prevDat">*</sup>
            <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                    to add Document </span></i> </label>
                <input type="file" class="btn primaryBtn document" id="insertedInput" accept="${dict.documentType}" onchange="openFile(event)">
                <!-- <button onclick="doupload()" name="submit">Upload File</button> -->
              </div>
                <div class="hover-space" id="hoverDemoSect"></div>
              </div>`;
    
                        }
                    }
                }
                count_sect++;

            }
            //for single elem
            if (obj[i].id.replace(/[0-9]/g, "") == "textFieldEle") {
                if(obj[i].required) {

                    parentDropArea.innerHTML +=
                    `
                <div class="form-box field-card" id="textFieldEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                    <label id="insertedLabel" class="d-flex">` +
                    obj[i].label +
                    `   <sup id="prevYesNo"  >*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                    obj[i].placeholder +
                    `</span></i> </label>
                    <input type="text" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}"    
                    required="">
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `;
                }else{
                    parentDropArea.innerHTML +=
                    `
                <div class="form-box field-card" id="textFieldEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                    <label id="insertedLabel" class="d-flex">` +
                    obj[i].label +
                    `   <sup id="prevYesNo"  style="display: none;">*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                    obj[i].placeholder +
                    `</span></i> </label>
                    <input type="text" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}"    
                    required="">
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `;
                }



                if (obj[i].required == true) {
                    parentDropArea
                        .querySelector("#textFieldEle")
                        .querySelector("input").required = "required";


                }
                                   
  
                parentDropArea.querySelector("#textFieldEle").id =
                    parentDropArea.querySelector("#textFieldEle").id + previewCloneNewId;
            }


            else if (obj[i].id.replace(/[0-9]/g, "") == "dialogueEle") {
                if(obj[i].required) {
                    parentDropArea.innerHTML +=
                    `
                    <div class="form-box" id="dialogueEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon"
                        onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon"
                        ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span
                            class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon"
                        onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon"
                        onclick="removeCurrentDiv(event)"><span
                            class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                <label id="insertedLabel" class="d-flex">`+
                    obj[i].label +
                    `<sup id="prevYesNo" >*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                    obj[i].placeholder +

                    `</span></i> </label>
                <input type="text" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}"    
                required="">
            </div>
            <div class="hover-space" id="hoverDemoBot"></div>
        <div id="topLane"></div>
        <div id="botLane"></div>
        </div>                  
`;

                }else{
                    parentDropArea.innerHTML +=
                    `
                    <div class="form-box" id="dialogueEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon"
                        onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon"
                        ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span
                            class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon"
                        onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon"
                        onclick="removeCurrentDiv(event)"><span
                            class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                <label id="insertedLabel" class="d-flex">`+
                    obj[i].label +
                    `<sup id="prevYesNo"  style="display: none;">*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                    obj[i].placeholder +

                    `</span></i> </label>
                <input type="text" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}"    
                required="">
            </div>
            <div class="hover-space" id="hoverDemoBot"></div>
        <div id="topLane"></div>
        <div id="botLane"></div>
        </div>                  
`;

                }

                if (obj[i].required == true) {
                    parentDropArea
                        .querySelector("#dialogueEle")
                        .querySelector("input").required = "required";
                }
                parentDropArea.querySelector("#dialogueEle").id =
                    parentDropArea.querySelector("#dialogueEle").id + previewCloneNewId;


            }

            else if (obj[i].id.replace(/[0-9]/g, "") == "urlFieldEle") {
                if(obj[i].required) {
                    parentDropArea.innerHTML +=
                    `<div class="form-box" id="urlFieldEle">

        <div class="hover-space" id="hoverDemoTop"></div>
        <div class="formboxedit">
            <a href="javascript:void(0)" class="icons settingIcon"
                onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
            <a href="javascript:void(0)" class="icons moveIcon"
                ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
            <a href="javascript:void(0)" class="icons pasteicon"><span
                    class="tooltiptext">Paste</span></a>
            <a href="javascript:void(0)" class="icons copyIcon"
                onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
            <a href="javascript:void(0)" class="icons deleteIcon"
                onclick="removeCurrentDiv(event)"><span
                    class="tooltiptext remove">Remove</span></a>
        </div>
        
            <label id="linkSecond" class="d-flex">` +
                    obj[i].label +
                    `<sup id="prevYesNo" >*</sup>
                    <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
              

                    `</span></i> </label>
            <input type="text" class="form-control requiredField" id="urlSecond"
            placeholder="${obj[i].placeholder}" required="" />
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
           `;

                }else{
                    parentDropArea.innerHTML +=
                    `<div class="form-box" id="urlFieldEle">

        <div class="hover-space" id="hoverDemoTop"></div>
        <div class="formboxedit">
            <a href="javascript:void(0)" class="icons settingIcon"
                onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
            <a href="javascript:void(0)" class="icons moveIcon"
                ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
            <a href="javascript:void(0)" class="icons pasteicon"><span
                    class="tooltiptext">Paste</span></a>
            <a href="javascript:void(0)" class="icons copyIcon"
                onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
            <a href="javascript:void(0)" class="icons deleteIcon"
                onclick="removeCurrentDiv(event)"><span
                    class="tooltiptext remove">Remove</span></a>
        </div>
        
            <label id="linkSecond" class="d-flex">` +
                    obj[i].label +
                    `<sup id="prevYesNo" style="display:none" >*</sup>
                    <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
               

                    `</span></i> </label>
            <input type="text" class="form-control requiredField" id="urlSecond"
            placeholder="${obj[i].placeholder}" required="" />
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
           `;

                }
                if (obj[i].required == true) {
                    parentDropArea
                        .querySelector("#urlFieldEle")
                        .querySelector("input").required = "required";
                }
                parentDropArea.querySelector("#urlFieldEle").id =
                    parentDropArea.querySelector("#urlFieldEle").id + previewCloneNewId;
            }



            else if (obj[i].id.replace(/[0-9]/g, "") == "numberEle") {
                if(obj[i].required) {
                    parentDropArea.innerHTML +=
                    `
                <div class="form-box field-card" id="numberEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                    <label id="insertedLabel" class="d-flex">` +
                    obj[i].label +
                    `<sup id="prevYesNo" >*</sup>
                    <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">`+
                    obj[i].placeholder +
                    // obj[i].placeholder +
                    `</span></i> </label>
                    <input type="number" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}" required="">
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `;

                }else{
                    parentDropArea.innerHTML +=
                    `
                <div class="form-box field-card" id="numberEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                    <label id="insertedLabel" class="d-flex">` +
                    obj[i].label +
                    `<sup id="prevYesNo"  style="display: none;">*</sup>
                    <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">`+
                    obj[i].placeholder +
                    // obj[i].placeholder +
                    `</span></i> </label>
                    <input type="number" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}" required="">
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `;

                }
                if (obj[i].required == true) {
                    parentDropArea
                        .querySelector("#numberEle")
                        .querySelector("input").required = "required";
                }
                parentDropArea.querySelector("#numberEle").id =
                    parentDropArea.querySelector("#numberEle").id + previewCloneNewId;
            }


            else if (obj[i].id.replace(/[0-9]/g, "") == "phoneEle") {
                if(obj[i].required) {
                    parentDropArea.innerHTML +=
                    `
                <div class="form-box field-card" id="phoneEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                    <label id="insertedLabel" class="d-flex">` +
                    obj[i].label +
                    `<sup id="prevYesNo" >*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                    obj[i].placeholder +
                    `</span></i> </label>
                    <input type="phone" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}" required="">
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `;

                }else{
                    parentDropArea.innerHTML +=
                    `
                <div class="form-box field-card" id="phoneEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                    <label id="insertedLabel" class="d-flex">` +
                    obj[i].label +
                    `<sup id="prevYesNo"  style="display: none;">*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                    obj[i].placeholder +
                    `</span></i> </label>
                    <input type="phone" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}" required="">
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `;

                }
                if (obj[i].required == true) {
                    parentDropArea
                        .querySelector("#phoneEle")
                        .querySelector("input").required = "required";
                }
                parentDropArea.querySelector("#phoneEle").id =
                    parentDropArea.querySelector("#phoneEle").id + previewCloneNewId;
            } else if (obj[i].id.replace(/[0-9]/g, "") == "emailEle") {
                if(obj[i].required) {
                    parentDropArea.innerHTML +=
                    `
                <div class="form-box field-card" id="emailEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                    <label id="insertedLabel" class="d-flex">` +
                    obj[i].label +
                    `<sup id="prevYesNo">*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                    obj[i].tooltip +
                    `</span></i> </label>
                    <input type="email" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}" required="">
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `;

                }else{
                    parentDropArea.innerHTML +=
                    `
                <div class="form-box field-card" id="emailEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                    <label id="insertedLabel" class="d-flex">` +
                    obj[i].label +
                    `<sup id="prevYesNo"  style="display: none;">*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                    obj[i].tooltip +
                    `</span></i> </label>
                    <input type="email" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}" required="">
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `;

                }
                if (obj[i].required == true) {
                    parentDropArea
                        .querySelector("#emailEle")
                        .querySelector("input").required = "required";
                }
                parentDropArea.querySelector("#emailEle").id =
                    parentDropArea.querySelector("#emailEle").id + previewCloneNewId;
            } else if (obj[i].id.replace(/[0-9]/g, "") == "submitArea") {
                if(obj[i].required) {
                    parentDropArea.innerHTML +=
                    `
                <div class="form-box field-card" id="submitArea">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                    <label id="insertedLabel" class="d-flex">` +
                    obj[i].label +
                    `<sup id="prevYesNo" >*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                    obj[i].tooltip +
                    `</span></i> </label>
                    <textarea rows="5" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}" required=""></textarea>
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `;

                }else{
                    parentDropArea.innerHTML +=
                    `
                <div class="form-box field-card" id="submitArea">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                    <label id="insertedLabel" class="d-flex">` +
                    obj[i].label +
                    `<sup id="prevYesNo"  style="display: none;">*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                    obj[i].tooltip +
                    `</span></i> </label>
                    <textarea rows="5" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}" required=""></textarea>
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `;

                }
                try {
                    if (obj[i].required == true) {
                        parentDropArea
                            .querySelector("#submitArea")
                            .querySelector("textarea").required = "required";
                    }
                    parentDropArea.querySelector("#submitArea").id =
                        parentDropArea.querySelector("#submitArea").id + previewCloneNewId;
                } catch (error) { }
            }

            //karthika-promise
            else if (obj[i].id.replace(/[0-9]/g, "") == "promiseEle") {
                if(obj[i].required) {                parentDropArea.innerHTML +=
                    `<div class="form-box" id="promiseEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                <a href="javascript:void(0)" class="icons settingIcon"
                    onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                <a href="javascript:void(0)" class="icons moveIcon"
                    ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span
                        class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon"
                    onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                <a href="javascript:void(0)" class="icons deleteIcon"
                    onclick="removeCurrentDiv(event)"><span
                        class="tooltiptext remove">Remove</span></a>
            </div>
            <div id="insertedData" style="flex-direction: column;">
            <label id="insertedLabel" class="d-flex">` + obj[i].label +
                    `<sup id="prevYesNo" >*</sup>
            <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                    obj[i].tooltip +
                    `</span></i> </label>
            <textarea class="form-control requiredField" id="insertedInput"  value='[{
                "type": "select",
                ....,
                dataSrc: async () => {
                return await fetch("/api/somepath").then((data) => data.json())
                },
                ....
                }]'
            placeholder="${obj[i].placeholder}" required="" >	[{
                "type": "select",
                ....,
                dataSrc: async () => {
                return await fetch("/api/somepath").then((data) => data.json())
                },
                ....
                }]</textarea>  
            </div>
            <div class="hover-space" id="hoverDemoBot"></div>
        <div id="topLane"></div>
        <div id="botLane"></div>
        </div>        
                `;

                }else{
                    parentDropArea.innerHTML +=
                    `<div class="form-box" id="promiseEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                <a href="javascript:void(0)" class="icons settingIcon"
                    onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                <a href="javascript:void(0)" class="icons moveIcon"
                    ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span
                        class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon"
                    onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                <a href="javascript:void(0)" class="icons deleteIcon"
                    onclick="removeCurrentDiv(event)"><span
                        class="tooltiptext remove">Remove</span></a>
            </div>
            <div id="insertedData" style="flex-direction: column;">
            <label id="insertedLabel" class="d-flex">` + obj[i].label +
                    `<sup id="prevYesNo"  style="display: none;">*</sup>
            <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                    obj[i].tooltip +
                    `</span></i> </label>
            <textarea class="form-control requiredField" id="insertedInput"  value='[{
                "type": "select",
                ....,
                dataSrc: async () => {
                return await fetch("/api/somepath").then((data) => data.json())
                },
                ....
                }]'
            placeholder="${obj[i].placeholder}" required="" >	[{
                "type": "select",
                ....,
                dataSrc: async () => {
                return await fetch("/api/somepath").then((data) => data.json())
                },
                ....
                }]</textarea>  
            </div>
            <div class="hover-space" id="hoverDemoBot"></div>
        <div id="topLane"></div>
        <div id="botLane"></div>
        </div>        
                `;

                }
                try {

                    if (obj[i].required == true) {
                        parentDropArea
                            .querySelector("#promiseEle")
                            .querySelector("input").required = "required";
                    }
                    parentDropArea.querySelector("#promiseEle").id =
                        parentDropArea.querySelector("#promiseEle").id + previewCloneNewId;
                } catch (error) { }


            }




            else if (obj[i].id.replace(/[0-9]/g, "") == "checkBoxEle") {
                if(obj[i].required) {
                    parentDropArea.innerHTML +=
                    `
                <div class="form-box field-card" id="checkBoxEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="previewData" >

                <div id="insertedData" style="display: flex;flex-direction:row;">
                <input type="checkbox" class="checkbox requiredField" required="" id="insertedInput">
                <label id="insertedLabel" class="d-flex">` +
                    obj[i].label +
                    `<sup id="prevYesNo" >*</sup>
				<i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                    obj[i].tooltip +
                    `</span></i> </label>
                </div>
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>

            </div>                  
 `;

                }else{
                    parentDropArea.innerHTML +=
                    `
                <div class="form-box field-card" id="checkBoxEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="previewData" >

                <div id="insertedData" style="display: flex;flex-direction:row;">
                <input type="checkbox" class="checkbox requiredField" required="" id="insertedInput">
                <label id="insertedLabel" class="d-flex">` +
                    obj[i].label +
                    `<sup id="prevYesNo" style="display:none">*</sup>
				<i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                    obj[i].tooltip +
                    `</span></i> </label>
                </div>
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>

            </div>                  
 `;

                }
                if (obj[i].required == true) {
                    parentDropArea
                        .querySelector("#checkBoxEle")
                        .querySelector("input").required = "required";
                }
                parentDropArea.querySelector("#checkBoxEle").id =
                    parentDropArea.querySelector("#checkBoxEle").id + previewCloneNewId;
            } else if (obj[i].id.replace(/[0-9]/g, "") == "buttonEle") {
                // console.log("ID CHECK");
                parentDropArea.innerHTML +=
                    `
                <div class="form-box field-card" id="buttonEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="display:flex;flex-direction:row;">
                <input type="` +
                    obj[i].inputType +
                    `" value="` +
                    obj[i].label +
                    `" class="btn primaryBtn" id="buttonBox2" style="padding:5px 10px;">
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `;
                if (obj[i].buttonBlockStyle == false) {
                    document.querySelector("#buttonBox2").style.width = "fit-content";
                }
                if (obj[i].required == true) {
                    parentDropArea
                        .querySelector("#buttonEle")
                        .querySelector("input").required = "required";
                }
                parentDropArea.querySelector("#buttonEle").id =
                    parentDropArea.querySelector("#buttonEle").id + previewCloneNewId;
                document.querySelector("#buttonBox2").id = "insertedButton";
            }



            else if (obj[i].id.replace(/[0-9]/g, "") == "selectBoxEle") {
                if(obj[i].required) {
                    parentDropArea.innerHTML +=
                    `
                <div class="form-box field-card" id="selectBoxEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                <label class="d-flex " id="insertedLabel">` +
                    obj[i].label +
                    ` <sup id="prevYesNo" >*</sup> <i class="Questionicons f-left">
                <span class="R-st" id="insertedTooltip">` +
                    obj[i].tooltip +
                    `</span></i></label>
                <select class="form-control requiredField" id="currentInput" >
                <!-- <option id="previewRow0"></option> 
                </select>
                <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>`;


                }else{
                    parentDropArea.innerHTML +=
                    `
                <div class="form-box field-card" id="selectBoxEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                <label class="d-flex " id="insertedLabel">` +
                    obj[i].label +
                    ` <sup id="prevYesNo"  style="display: none;">*</sup> <i class="Questionicons f-left">
                <span class="R-st" id="insertedTooltip">` +
                    obj[i].tooltip +
                    `</span></i></label>
                <select class="form-control requiredField" id="currentInput" >
                <!-- <option id="previewRow0"></option> 
                </select>
                <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>`;


                }
                let j = 0;
                for (var propName in obj[i].selectData) {
                    document.querySelector("#currentInput").innerHTML +=
                        `<option id="previewRow` +
                        j +
                        `" value ='` +
                        obj[i].selectData[propName] +
                        `'">` +
                        propName +
                        `</option>`;
                    j += 1;
                }
                document.querySelector("#currentInput").id = "insertedInput";

                parentDropArea.querySelector("#selectBoxEle").id =
                    parentDropArea.querySelector("#selectBoxEle").id + previewCloneNewId;
            }
            //karthika-radio
            else if (obj[i].id.replace(/[0-9]/g, "") == "radioEle") {
                if(obj[i].required) {
                    parentDropArea.innerHTML +=
                    `
                <div class="form-box field-card" id="radioEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>

                <div id="insertedData" style="flex-direction: column;">
                <label class="d-flex " id="insertedLabel">` +
                    obj[i].label +
                    ` 
                <sup id="prevYesNo"  >*</sup> <i class="Questionicons f-left">
                <span class="R-st" id="insertedTooltip">` +
                    obj[i].tooltip +
                    `</span></i></label>
                <div class="requiredField" id="currentInput" style="vertical-align: text-top;" >
                <!-- <option id="previewRow0"></option> 
                </div>

                <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>`;

                }else{
                    parentDropArea.innerHTML +=
                    `
                <div class="form-box field-card" id="radioEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>

                <div id="insertedData" style="flex-direction: column;">
                <label class="d-flex " id="insertedLabel">` +
                    obj[i].label +
                    ` 
                <sup id="prevYesNo"  style="display: none;">*</sup> <i class="Questionicons f-left">
                <span class="R-st" id="insertedTooltip">` +
                    obj[i].tooltip +
                    `</span></i></label>
                <div class="requiredField" id="currentInput" style="vertical-align: text-top;" >
                <!-- <option id="previewRow0"></option> 
                </div>

                <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>`;

                }

                let j = 0;
                for (var propName in obj[i].radioData) {
                    document.querySelector("#currentInput").innerHTML +=
                        `<input type=radio name='` +
                        obj[i].radioName +
                        `' id="radioPrevRow` +
                        j +
                        `" value ='` +
                        propName +
                        `'>` +
                        `<label>${obj[i].radioData[propName]}</label>
                        </option>`;
                    j += 1;
                }
                document.querySelector("#currentInput").id = "insertedInput";

                parentDropArea.querySelector("#radioEle").id =
                    parentDropArea.querySelector("#radioEle").id + previewCloneNewId;
            }
            //karthika-date and time
            else if (obj[i].id.replace(/[0-9]/g, "") == "dateAndTimeEle") {
                if(obj[i].required) {
                    parentDropArea.innerHTML +=
                    `<div class="form-box" id="dateAndTimeEle">

        <div class="hover-space" id="hoverDemoTop"></div>
        <div class="formboxedit">
            <a href="javascript:void(0)" class="icons settingIcon"
                onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
            <a href="javascript:void(0)" class="icons moveIcon"
                ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
            <a href="javascript:void(0)" class="icons pasteicon"><span
                    class="tooltiptext">Paste</span></a>
            <a href="javascript:void(0)" class="icons copyIcon"
                onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
            <a href="javascript:void(0)" class="icons deleteIcon"
                onclick="removeCurrentDiv(event)"><span
                    class="tooltiptext remove">Remove</span></a>
        </div>
        <div id="previewData">
            <label id="dateAndTime2" class="d-flex">` +
                    obj[i].label +
                    ` 
                    <sup id="prevYesNo">*</sup> <i class="Questionicons f-left">
                    <span class="R-st" id="insertedTooltip">` +

                    `</span></i> </label> <input id="dt" class="form-control requiredField"  type="datetime-local" />
        </div>
        <div class="hover-space" id="hoverDemoBot"></div>
    </div>
</div>`;

                }else{
                    parentDropArea.innerHTML +=
                    `<div class="form-box" id="dateAndTimeEle">

        <div class="hover-space" id="hoverDemoTop"></div>
        <div class="formboxedit">
            <a href="javascript:void(0)" class="icons settingIcon"
                onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
            <a href="javascript:void(0)" class="icons moveIcon"
                ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
            <a href="javascript:void(0)" class="icons pasteicon"><span
                    class="tooltiptext">Paste</span></a>
            <a href="javascript:void(0)" class="icons copyIcon"
                onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
            <a href="javascript:void(0)" class="icons deleteIcon"
                onclick="removeCurrentDiv(event)"><span
                    class="tooltiptext remove">Remove</span></a>
        </div>
        <div id="previewData">
            <label id="dateAndTime2" class="d-flex">` +
                    obj[i].label +
                    ` 
                <sup id="prevYesNo" style="display:none">*</sup> <i class="Questionicons f-left">
                <span class="R-st" id="insertedTooltip">` +

                    `</span></i> </label> <input id="dt" class="form-control requiredField"  type="datetime-local" />
        </div>
        <div class="hover-space" id="hoverDemoBot"></div>
    </div>
</div>`;

                }
                if (obj[i].required == true) {
                    parentDropArea
                        .querySelector("#dateAndTimeEle")
                        .querySelector("input").required = "required";
                }
                parentDropArea.querySelector("#dateAndTimeEle").id =
                    parentDropArea.querySelector("#dateAndTimeEle").id + previewCloneNewId;
            }

            else if (obj[i].id.replace(/[0-9]/g, "") == "titleBoxEle") {
                if(obj[i].required) {
                    parentDropArea.innerHTML +=
                    `<div class="form-box checkbox" id="titleBoxEle">
        <div class="hover-space" id="hoverDemoTop"></div>
        <div class="formboxedit">
          <a href="javascript:void(0)" class="icons settingIcon"
            onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
          <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span
              class="tooltiptext">Move</span></a>
          <a href="javascript:void(0)" class="icons pasteicon"><span
              class="tooltiptext">Paste</span></a>
          <a href="javascript:void(0)" class="icons copyIcon"
            onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
          <!-- <a href="javascript:void(0)" class="icons wrenchIcon" onclick="createJSON(event)"><span class="tooltiptext">Edit JSON</span></a> -->
          <a href="javascript:void(0)" class="icons deleteIcon"
            onclick="removeCurrentDiv(event)"><span
              class="tooltiptext remove">Remove</span></a>
        </div>
        <div id="previewData" >
          <div >

        
          <h1 ><label id="titleBox2"
           class="d-flex" style="font-size: 20px !important;font-weight:550;">
           ${obj[i].label}<sup id="prevYesNo" >*</sup>
           <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                    obj[i].placeholder +
                    `</span></i></label></h1>
        <input type="text" style="display: none;" class="checkbox requiredField" required />
       </div>
     </div>

     <div class="hover-space" id="hoverDemoBot"></div>
   </div>
 </div>`;

                }else{
                    parentDropArea.innerHTML +=
                    `<div class="form-box checkbox" id="titleBoxEle">
        <div class="hover-space" id="hoverDemoTop"></div>
        <div class="formboxedit">
          <a href="javascript:void(0)" class="icons settingIcon"
            onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
          <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span
              class="tooltiptext">Move</span></a>
          <a href="javascript:void(0)" class="icons pasteicon"><span
              class="tooltiptext">Paste</span></a>
          <a href="javascript:void(0)" class="icons copyIcon"
            onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
          <!-- <a href="javascript:void(0)" class="icons wrenchIcon" onclick="createJSON(event)"><span class="tooltiptext">Edit JSON</span></a> -->
          <a href="javascript:void(0)" class="icons deleteIcon"
            onclick="removeCurrentDiv(event)"><span
              class="tooltiptext remove">Remove</span></a>
        </div>
        <div id="previewData" >
          <div >

        
          <h1 ><label id="titleBox2"
           class="d-flex" style="font-size: 20px !important;font-weight:550;">
           ${obj[i].label}<sup id="prevYesNo"  style="display: none;">*</sup>
           <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                    obj[i].placeholder +
                    `</span></i></label></h1>
        <input type="text" style="display: none;" class="checkbox requiredField" required />
       </div>
     </div>

     <div class="hover-space" id="hoverDemoBot"></div>
   </div>
 </div>`;

                }
                if (obj[i].required == true) {
                    parentDropArea
                        .querySelector("#titleBoxEle");
                    required = "required";
                }
                parentDropArea.querySelector("#titleBoxEle").id =
                    parentDropArea.querySelector("#titleBoxEle").id + previewCloneNewId;
            }

            //karthika-table
            else if (obj[i].id.replace(/[0-9]/g, "") == "tableEle") {
                if(obj[i].required) {
                    parentDropArea.innerHTML +=
                    `
        <div class="form-box" id="tableEle"> 
        <div class="hover-space" id="hoverDemoTop"></div> 
        <div class="formboxedit">
        <a href="javascript:void(0)" class="icons settingIcon"
            onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
        <a href="javascript:void(0)" class="icons moveIcon"
            ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
        <a href="javascript:void(0)" class="icons pasteicon"><span
                class="tooltiptext">Paste</span></a>
        <a href="javascript:void(0)" class="icons copyIcon"
            onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
        <a href="javascript:void(0)" class="icons deleteIcon"
            onclick="removeCurrentDiv(event)"><span
                class="tooltiptext remove">Remove</span></a>
    </div>
    <div id="previewData">
    <label id="insertedLable" class="d-flex">${obj[i].label}
    <sup id="prevYesNo"  
    class="prevDat">*</sup>
<i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
        to add Document </span></i> </label>
        <samp id="insertedInput" class="tableStyle" accept="">${obj[i].table}</samp>
        </div>
        <div class="hover-space" id="hoverDemoSect"></div>

    </div>
        
        
        `;

                }else{
                    parentDropArea.innerHTML +=
                    `
        <div class="form-box" id="tableEle"> 
        <div class="hover-space" id="hoverDemoTop"></div> 
        <div class="formboxedit">
        <a href="javascript:void(0)" class="icons settingIcon"
            onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
        <a href="javascript:void(0)" class="icons moveIcon"
            ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
        <a href="javascript:void(0)" class="icons pasteicon"><span
                class="tooltiptext">Paste</span></a>
        <a href="javascript:void(0)" class="icons copyIcon"
            onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
        <a href="javascript:void(0)" class="icons deleteIcon"
            onclick="removeCurrentDiv(event)"><span
                class="tooltiptext remove">Remove</span></a>
    </div>
    <div id="previewData">
    <label id="insertedLable" class="d-flex">${obj[i].label}
    <sup id="prevYesNo"  style="display: none;"
    class="prevDat">*</sup>
<i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
        to add Document </span></i> </label>
        <samp id="insertedInput" class="tableStyle" accept="">${obj[i].table}</samp>
        </div>
        <div class="hover-space" id="hoverDemoSect"></div>

    </div>
        
        
        `;

                }
                if (obj[i].required == true) {
                    parentDropArea
                        .querySelector("#tableEle");
                    required = "required";
                }
                parentDropArea.querySelector("#tableEle").id =
                    parentDropArea.querySelector("#tableEle").id + previewCloneNewId;
            }



            else if (obj[i].id.replace(/[0-9]/g, "") == "documentEle") {

                if(obj[i].required) {
                    parentDropArea.innerHTML += `<div class="form-box checkbox" id="documentEle">


                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                      <a href="javascript:void(0)" class="icons settingIcon"
                        onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                      <a href="javascript:void(0)" class="icons moveIcon"
                        ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                      <a href="javascript:void(0)" class="icons copyIcon"
                        onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                      <!-- <a href="javascript:void(0)" class="icons wrenchIcon" onclick="createJSON(event)"><span class="tooltiptext">Edit JSON</span></a> -->
                      <a href="javascript:void(0)" class="icons deleteIcon"
                      onclick="removeCurrentDiv(event)"><span
                          class="tooltiptext remove">Remove</span></a>
                    </div>
            
                    <div id="previewData">
                    <label id="insertedLabel" class="d-flex">${obj[i].label}<sup id="prevYesNo"
                    class="prevDat">*</sup>
                <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                        to add Document </span></i> </label>
                    <input type="file" class="btn primaryBtn document" id="insertedInput" onchange="openFile(event)">
                    <!-- <button onclick="doupload()" name="submit">Upload File</button> -->
                  </div>
                    <div class="hover-space" id="hoverDemoSect"></div>
                  </div>`;
            
                }else{
                    parentDropArea.innerHTML += `<div class="form-box checkbox" id="documentEle">


                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                      <a href="javascript:void(0)" class="icons settingIcon"
                        onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                      <a href="javascript:void(0)" class="icons moveIcon"
                        ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                      <a href="javascript:void(0)" class="icons copyIcon"
                        onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                      <!-- <a href="javascript:void(0)" class="icons wrenchIcon" onclick="createJSON(event)"><span class="tooltiptext">Edit JSON</span></a> -->
                      <a href="javascript:void(0)" class="icons deleteIcon"
                      onclick="removeCurrentDiv(event)"><span
                          class="tooltiptext remove">Remove</span></a>
                    </div>
            
                    <div id="previewData">
                    <label id="insertedLabel" class="d-flex">${obj[i].label}<sup id="prevYesNo"  style="display: none;"
                    class="prevDat">*</sup>
                <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                        to add Document </span></i> </label>
                    <input type="file" class="btn primaryBtn document" id="insertedInput" onchange="openFile(event)">
                    <!-- <button onclick="doupload()" name="submit">Upload File</button> -->
                  </div>
                    <div class="hover-space" id="hoverDemoSect"></div>
                  </div>`;
            
                }
            }

            else if (obj[i].id.replace(/[0-9]/g, "") == "videoembedEle") {
                if(obj[i].required) {
                    parentDropArea.innerHTML += `
                    <div class="form-box" id="videoembedEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon"
                            onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon"
                            ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span
                                class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon"
                            onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon"
                            onclick="removeCurrentDiv(event)"><span
                                class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="previewData">
                    <label id="insertedLabel" class="d-flex">${obj[i].label}<sup id="prevYesNo" 
                    class="prevDat">*</sup>
                <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                        to add Document </span></i> </label>
                        <iframe id="insertedInput" class="videoSet" src="`+
                        obj[i].videoSRC + `"  >
                        </iframe>
    
                        </div>
                        <div class="hover-space" id="hoverDemoSect"></div>
                      </div>
    
    
                    
                    `;
    
                }else{
                    parentDropArea.innerHTML += `
                    <div class="form-box" id="videoembedEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon"
                            onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon"
                            ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span
                                class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon"
                            onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon"
                            onclick="removeCurrentDiv(event)"><span
                                class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="previewData">
                    <label id="insertedLabel" class="d-flex">${obj[i].label}<sup id="prevYesNo"  style="display: none;"
                    class="prevDat">*</sup>
                <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                        to add Document </span></i> </label>
                        <iframe id="insertedInput" class="videoSet" src="`+
                        obj[i].videoSRC + `"  >
                        </iframe>
    
                        </div>
                        <div class="hover-space" id="hoverDemoSect"></div>
                      </div>
    
    
                    
                    `;
    
                }

                if (obj[i].required == true) {
                    parentDropArea
                        .querySelector("#videoembedEle");
                    required = "required";
                }
                parentDropArea.querySelector("#videoembedEle").id =
                    parentDropArea.querySelector("#videoembedEle").id + previewCloneNewId;

            }

            else if (obj[i].id.replace(/[0-9]/g, "") == "imageFieldEle") {
                if(obj[i].required) {
                    parentDropArea.innerHTML += `
                    <div class="form-box field-card" id="imageFieldEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                                    <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="previewData">
                    <div class="form-box imageUpload">
                
                    <input type="file" accept="image/*" name="upload" value="Upload Image"  id="setFile"
                        onchange="PlaceHolderImage(event)" />
                </div>
                    <label id="insertedLabel" class="d-flex">${obj[i].label}<sup id="prevYesNo" 
                    class="prevDat">*</sup>
                <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                        to add Document </span></i> </label>
                        <img id="insertedImage"  src="` +
                        obj[i].imgSRC +
    
                        ` alt="Submit" width="200"">
                    
                                            </div>
                                            <div class="hover-space" id="hoverDemoSect"></div>
                                          </div>
                    
                    
                    
                    `;
    
                }else{
                    parentDropArea.innerHTML += `
                    <div class="form-box field-card" id="imageFieldEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                                    <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="previewData">
                    <div class="form-box imageUpload">
                
                    <input type="file" accept="image/*" name="upload" value="Upload Image"  id="setFile"
                        onchange="PlaceHolderImage(event)" />
                </div>
                    <label id="insertedLabel" class="d-flex">${obj[i].label}<sup id="prevYesNo" style="display:none"
                    class="prevDat">*</sup>
                <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                        to add Document </span></i> </label>
                        <img id="insertedImage"  src="` +
                        obj[i].imgSRC +
    
                        ` alt="Submit" width="200"">
                    
                                            </div>
                                            <div class="hover-space" id="hoverDemoSect"></div>
                                          </div>
                    
                    
                    
                    `;
    
                }
                try {

                    if (obj[i].required == true) {
                        parentDropArea
                            .querySelector("#imageFieldEle")
                            .querySelector("input").required = "required";
                    }
                    parentDropArea.querySelector("#imageFieldEle").id =
                        parentDropArea.querySelector("#imageFieldEle").id +
                        previewCloneNewId;
                } catch (error) { }

            }

            else if (obj[i].id.replace(/[0-9]/g, "") == "signatureEle") {
                if(obj[i].required) {
                    parentDropArea.innerHTML += `
                    <div class="form-box" id="signatureEle">  
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon"
                        onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon"
                        ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span
                            class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon"
                        onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon"
                        onclick="removeCurrentDiv(event)"><span
                            class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="previewData">
                <label id="signBox2" class="d-flex">${obj[i].label}<sup id="prevYesNo"  
                class="prevDat">*</sup>
            <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                    to add Document </span></i> </label>
        
                    <div class="row">
                    <div class="col-md-12">
                      <canvas id="sig-canvas" width="220" height="60">
                        Get a better browser, bro.
                      </canvas></div>
        
                      <div class="row">
                      <div class="col-md-12">
                        <button class="btn btn-primary" id="sig-submitBtn" style="padding: 5px 10px">Submit Signature </button>
                        <button class="btn btn-default" id="sig-clearBtn" style="padding: 5px 10px"> Clear Signature </button>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                    <div class="col-md-12">
                      <input type="text" id="sig-dataUrl" style="display: none"  class="form-control" rows="5"/>
                    </div>
                  </div>
                  <br />
                  <div class="row" style="display:none">
                  <div class="col-md-12">
                  id="sig-image" 
                  class="requiredField"
                  src="` +
                  obj[i].imgSRC +
        
                  ` alt="Your signature will go here!""
                  >
        
                  </div>
                  </div>
        
        
                </div>
        
        
        
                     <div class="hover-space" id="hoverDemoSect"></div>
        
        
                   </div>
        
        
                    
                    `;  
                }else{
                    parentDropArea.innerHTML += `
                    <div class="form-box" id="signatureEle">  
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon"
                        onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon"
                        ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span
                            class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon"
                        onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon"
                        onclick="removeCurrentDiv(event)"><span
                            class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="previewData">
                <label id="signBox2" class="d-flex">${obj[i].label}<sup id="prevYesNo"  style="display: none;"
                class="prevDat">*</sup>
            <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                    to add Document </span></i> </label>
        
                    <div class="row">
                    <div class="col-md-12">
                      <canvas id="sig-canvas" width="220" height="60">
                        Get a better browser, bro.
                      </canvas></div>
        
                      <div class="row">
                      <div class="col-md-12">
                        <button class="btn btn-primary" id="sig-submitBtn" style="padding: 5px 10px">Submit Signature </button>
                        <button class="btn btn-default" id="sig-clearBtn" style="padding: 5px 10px"> Clear Signature </button>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                    <div class="col-md-12">
                      <input type="text" id="sig-dataUrl" style="display: none"  class="form-control" rows="5"/>
                    </div>
                  </div>
                  <br />
                  <div class="row" style="display:none">
                  <div class="col-md-12">
                  id="sig-image" 
                  class="requiredField"
                  src="` +
                  obj[i].imgSRC +
        
                  ` alt="Your signature will go here!""
                  >
        
                  </div>
                  </div>
        
        
                </div>
        
        
        
                     <div class="hover-space" id="hoverDemoSect"></div>
        
        
                   </div>
        
        
                    
                    `;  
                }
    try {

                if (obj[i].required == true) {
                    parentDropArea
                        .querySelector("#signatureEle")
                        .querySelector("input").required = "required";
                }
                parentDropArea.querySelector("#signatureEle").id =
                    parentDropArea.querySelector("#signatureEle").id +
                    previewCloneNewId;
            } catch (error) { }


            }




        }
        clean(document);
    };
    reader.onerror = function () {
        // console.log(reader.error);
    };
}
function handleReloadFileSelect(evt) {

    jsonString = evt;
    let obj = JSON.parse(jsonString);
    // console.log("obj ", obj);
    let length = obj.length;
    var count_sect = 0;
    let parentDropArea = document.querySelector("#parentDropAreaBox");
    for (let i = 1; i < obj.length; i++) {
        previewCloneNewId += 1;

        if (obj[i].id.replace(/[0-9]/g, "") == "sectionEle") {
            parentDropArea.innerHTML +=
                `<div class="section-box" id="sectionEle` +
                count_sect +
                `">

            <div class="hover-space" id="hoverDemoTop"></div>
            <div class="formboxedit1">
              <a href="javascript:void(0)" class="icons settingIcon"
                onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
              <a href="javascript:void(0)" class="icons moveIcon"
                ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
              <a href="javascript:void(0)" class="icons pasteicon"><span
                  class="tooltiptext">Paste</span></a>
              <a href="javascript:void(0)" class="icons copyIcon"
                onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
              <!-- <a href="javascript:void(0)" class="icons wrenchIcon" onclick="createJSON(event)"><span class="tooltiptext">Edit JSON</span></a> -->
              <a href="javascript:void(0)" class="icons deleteIcon"
                onclick="removeCurrentDiv(event)"><span
                  class="tooltiptext remove">Remove</span></a>
            </div>
            <div id="previewData">

              <div class="sectionTitle">
                <label class="d-flex legendbox" id="sectionBox2">` +
                obj[i].label +
                `</label>
            </div>
            <div class="hover-space" id="hoverDemoSect"></div>
          </div>
        </div>`;
            var id_text = "sectionEle" + count_sect;
            var previewEle1 = document.getElementById(id_text);
            previewEle1.className = "section-box field-card";
            temp_top = document.createElement("div");
            temp_top.id = "topSectLane";
            previewEle1.appendChild(temp_top);
            temp_bot = document.createElement("div");
            temp_bot.id = "botSectLane";
            previewEle1.appendChild(temp_bot);
            previewEle1.querySelector(".sectionTitle").parentElement.style.border =
                "1px dashed #999";

            previewEle1.querySelector(".sectionTitle").parentElement.style.padding =
                "10px";
            previewEle1.querySelector(".sectionTitle").parentElement.style.top =
                "25px";
            previewEle1.querySelector(".sectionTitle").id = "insertedSection";
            previewEle1.querySelector("#sectionBox2").id = "insertedSectionLabel";
            previewEle1.querySelector("#previewData").id = "sectData" + count_sect;




            for (let dict of obj[i].sectionData) {
                if (dict.id.replace(/[0-9]/g, "") == "textFieldEle") {

                if(dict.required) {
                    let text_elem = document.querySelector("#sectData" + count_sect);
                    text_elem.innerHTML +=
                        `
                    <div class="form-box field-card" id="textFieldEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="insertedData" style="flex-direction: column;">
                        <label id="insertedLabel" class="d-flex">` +
                        dict.label +
                        `<sup id="prevYesNo" >*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` + dict.placeholder +
                        `</span></i> </label>
                        <input type="text" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}" required="">
                    </div>
                    <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>                  
     `;

     if (dict.required == true) {
        text_elem
            .querySelector("#textFieldEle")
            .querySelector("input").required = "required";
    }
    text_elem.querySelector("#textFieldEle").id =
        text_elem.querySelector("#textFieldEle").id + previewCloneNewId;

    } 
                else{
                 let text_elem = document.querySelector("#sectData" + count_sect);
                    text_elem.innerHTML +=
                        `
                    <div class="form-box field-card" id="textFieldEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="insertedData" style="flex-direction: column;">
                        <label id="insertedLabel" class="d-flex">` +
                        dict.label +
                        `<sup id="prevYesNo"  style="display: none;">*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` + dict.placeholder +
                        `</span></i> </label>
                        <input type="text" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}" required="">
                    </div>
                    <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>                  
     `;
                    if (dict.required == true) {
                        text_elem
                            .querySelector("#textFieldEle")
                            .querySelector("input").required = "required";
                    }
                    text_elem.querySelector("#textFieldEle").id =
                        text_elem.querySelector("#textFieldEle").id + previewCloneNewId;
                } 
   
                }

                

                else if (dict.id.replace(/[0-9]/g, "") == "numberEle") {

                    // console.log("ID CHECK");

                    if(dict.required) {

                        console.log(dict.required,"kkkkkkkkkkkkk")
                    let number_ele = document.querySelector("#sectData" + count_sect);
                    number_ele.innerHTML +=
                        `
                    <div class="form-box field-card" id="numberEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="insertedData" style="flex-direction: column;">
                        <label id="insertedLabel" class="d-flex">` +
                        dict.label +
                        
                        `<sup id="prevYesNo">*</sup>
                            <i class="Questionicons f-right"><span class="L-st" id="insertedTooltip">` +
                            
                            dict.placeholder +
                        `</span></i> </label>
                        <input type="number" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}" required="">
                    </div>
                    <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>                  
     `; 
    
    
     if (dict.required == true) {
        number_ele
            .querySelector("#numberEle")
            .querySelector("input").required = "required";
    }
    number_ele.querySelector("#numberEle").id =
        number_ele.querySelector("#numberEle").id + previewCloneNewId;

    }
                
                
                else {
                
                  let number_ele = document.querySelector("#sectData" + count_sect);
                    number_ele.innerHTML +=
                        `
                    <div class="form-box field-card" id="numberEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="insertedData" style="flex-direction: column;">
                        <label id="insertedLabel" class="d-flex">` +
                        dict.label +

                        `<sup id="prevYesNo"  style="display: none;">*</sup>
        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">`+

                            dict.placeholder +
                        `</span></i> </label>
                        <input type="number" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}" required="">
                    </div>
                    <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>                
     `;


     if (dict.required == true) {
        number_ele
            .querySelector("#numberEle")
            .querySelector("input").required = "required";
    }
    number_ele.querySelector("#numberEle").id =
        number_ele.querySelector("#numberEle").id + previewCloneNewId;

    }
                  

                } 
                
                
                else if (dict.id.replace(/[0-9]/g, "") == "phoneEle") {
                    // console.log("ID CHECK");

                    if(dict.required){
                    let phone_elem = document.querySelector("#sectData" + count_sect);
                    phone_elem.innerHTML +=
                        `
                    <div class="form-box field-card" id="phoneEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="insertedData" style="flex-direction: column;">
                        <label id="insertedLabel" class="d-flex">` +
                        dict.label +
                        `<sup id="prevYesNo">*</sup>
                            <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                        dict.placeholder +
                        `</span></i> </label>
                        <input type="phone" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}" required="">
                    </div>
                    <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>                  
     `;
                    if (dict.required == true) {
                        phone_elem
                            .querySelector("#phoneEle")
                            .querySelector("input").required = "required";
                    }
                    phone_elem.querySelector("#phoneEle").id =
                        phone_elem.querySelector("#phoneEle").id + previewCloneNewId;

                }else {

                    let phone_elem = document.querySelector("#sectData" + count_sect);
                    phone_elem.innerHTML +=
                        `
                    <div class="form-box field-card" id="phoneEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="insertedData" style="flex-direction: column;">
                        <label id="insertedLabel" class="d-flex">` +
                        dict.label +
                        `<sup id="prevYesNo"  style="display: none">*</sup>
                            <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                        dict.placeholder +
                        `</span></i> </label>
                        <input type="phone" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}" required="">
                    </div>
                    <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>                  
     `;
     if (dict.required == true) {
        phone_elem
            .querySelector("#phoneEle")
            .querySelector("input").required = "required";
    }
    phone_elem.querySelector("#phoneEle").id =
        phone_elem.querySelector("#phoneEle").id + previewCloneNewId;

                }
                } 
                
                else if (dict.id.replace(/[0-9]/g, "") == "emailEle") {
                    // console.log("ID CHECK");

                    if(dict.required) {
                    let email_elem = document.querySelector("#sectData" + count_sect);
                    email_elem.innerHTML +=
                        `
                    <div class="form-box field-card" id="emailEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="insertedData" style="flex-direction: column;">
                        <label id="insertedLabel" class="d-flex">` +
                        dict.label +
                        `<sup id="prevYesNo">*</sup>
                            <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                        dict.tooltip +
                        `</span></i> </label>
                        <input type="email" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}" required="">
                    </div>
                    <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>                  
     `;
                    if (dict.required == true) {
                        email_elem
                            .querySelector("#emailEle")
                            .querySelector("input").required = "required";
                    }
                    email_elem.querySelector("#emailEle").id =
                        email_elem.querySelector("#emailEle").id + previewCloneNewId;

                }

                else {

                    let email_elem = document.querySelector("#sectData" + count_sect);
                    email_elem.innerHTML +=
                        `
                    <div class="form-box field-card" id="emailEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="insertedData" style="flex-direction: column;">
                        <label id="insertedLabel" class="d-flex">` +
                        dict.label +
                        `<sup id="prevYesNo" style="display: none;">*</sup>
                            <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                        dict.tooltip +
                        `</span></i> </label>
                        <input type="email" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}" required="">
                    </div>
                    <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>                  
     `;
                    if (dict.required == true) {
                        email_elem
                            .querySelector("#emailEle")
                            .querySelector("input").required = "required";
                    }
                    email_elem.querySelector("#emailEle").id =
                        email_elem.querySelector("#emailEle").id + previewCloneNewId;


                }
                }


                else if (dict.id.replace(/[0-9]/g, "") == "promiseEle") {
                    // console.log("ID CHECK");

                    if(dict.required) {
                    let promise_elem = document.querySelector("#sectData" + count_sect);
                    promise_elem.innerHTML +=

                        `<div class="form-box" id="promiseEle">
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon"
                            onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon"
                            ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                            <a href="javascript:void(0)" class="icons pasteicon"><span
                                class="tooltiptext">Paste</span></a>
                            <a href="javascript:void(0)" class="icons copyIcon"
                            onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon"
                            onclick="removeCurrentDiv(event)"><span
                                class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="insertedData" style="flex-direction: column;">
                    <label id="insertedLabel" class="d-flex">` + dict.label +
                        `<sup id="prevYesNo">*</sup>
                    <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                        dict.tooltip +
                        `</span></i> </label>
                    <textarea class="form-control requiredField" id="insertedInput"  value='[{
                        "type": "select",
                        ....,
                        dataSrc: async () => {
                        return await fetch("/api/somepath").then((data) => data.json())
                        },
                        ....
                        }]'
                    placeholder="${dict.placeholder}" required="" >	[{
                        "type": "select",
                        ....,
                        dataSrc: async () => {
                        return await fetch("/api/somepath").then((data) => data.json())
                        },
                        ....
                        }]</textarea>  
                    </div>
                    <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>        
                        `;
                    if (dict.required == true) {
                        promise_elem
                            .querySelector("#promiseEle")
                            .querySelector("input").required = "required";
                    }
                    promise_elem.querySelector("#promiseEle").id =
                        promise_elem.querySelector("#promiseEle").id + previewCloneNewId;

                } else {

                    let promise_elem = document.querySelector("#sectData" + count_sect);
                    promise_elem.innerHTML +=

                        `<div class="form-box" id="promiseEle">
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon"
                            onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon"
                            ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                            <a href="javascript:void(0)" class="icons pasteicon"><span
                                class="tooltiptext">Paste</span></a>
                            <a href="javascript:void(0)" class="icons copyIcon"
                            onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon"
                            onclick="removeCurrentDiv(event)"><span
                                class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="insertedData" style="flex-direction: column;">
                    <label id="insertedLabel" class="d-flex">` + dict.label +
                        `<sup id="prevYesNo" style="display: none">*</sup>
                    <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                        dict.tooltip +
                        `</span></i> </label>
                    <textarea class="form-control requiredField" id="insertedInput"  value='[{
                        "type": "select",
                        ....,
                        dataSrc: async () => {
                        return await fetch("/api/somepath").then((data) => data.json())
                        },
                        ....
                        }]'
                    placeholder="${dict.placeholder}" required="" >	[{
                        "type": "select",
                        ....,
                        dataSrc: async () => {
                        return await fetch("/api/somepath").then((data) => data.json())
                        },
                        ....
                        }]</textarea>  
                    </div>
                    <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>        
                        `;
                    if (dict.required == true) {
                        promise_elem
                            .querySelector("#promiseEle")
                            .querySelector("input").required = "required";
                    }
                    promise_elem.querySelector("#promiseEle").id =
                        promise_elem.querySelector("#promiseEle").id + previewCloneNewId;


                }
            }


                else if (dict.id.replace(/[0-9]/g, "") == "submitArea") {
                    // console.log("ID CHECK");

                    if(dict.required) {
                    let submitArea_elem = document.querySelector(
                        "#sectData" + count_sect
                    );
                    submitArea_elem.innerHTML +=
                        `
                    <div class="form-box field-card" id="submitArea">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="insertedData" style="flex-direction: column;">
                        <label id="insertedLabel" class="d-flex">` +
                        dict.label +
                        `<sup id="prevYesNo">*</sup>
                            <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                        dict.tooltip +
                        `</span></i> </label>
                        <textarea rows="5" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}" required=""></textarea>
                    </div>
                    <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div> 
                               
     `;
                    try {
                        if (dict.required == true) {
                            submitArea_elem
                                .querySelector("#submitArea")
                                .querySelector("textarea").required = "required";
                        }
                        submitArea_elem.querySelector("#submitArea").id =
                            submitArea_elem.querySelector("#submitArea").id +
                            previewCloneNewId;
                    } catch (error) { }


                }else {

                    let submitArea_elem = document.querySelector(
                        "#sectData" + count_sect
                    );
                    submitArea_elem.innerHTML +=
                        `
                    <div class="form-box field-card" id="submitArea">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="insertedData" style="flex-direction: column;">
                        <label id="insertedLabel" class="d-flex">` +
                        dict.label +
                        `<sup id="prevYesNo"  style="display: none;">*</sup>
                            <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                        dict.tooltip +
                        `</span></i> </label>
                        <textarea rows="5" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}" required=""></textarea>
                    </div>
                    <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div> 
                               
     `;
                    try {
                        if (dict.required == true) {
                            submitArea_elem
                                .querySelector("#submitArea")
                                .querySelector("textarea").required = "required";
                        }
                        submitArea_elem.querySelector("#submitArea").id =
                            submitArea_elem.querySelector("#submitArea").id +
                            previewCloneNewId;
                    } catch (error) { }

                }
                } 
                
                else if (dict.id.replace(/[0-9]/g, "") == "checkBoxEle") {
                    // console.log("ID CHECK");

                    if(dict.required) {

                    let checkBox_elem = document.querySelector(
                        "#sectData" + count_sect
                    );
                    checkBox_elem.innerHTML +=
                        `
                    <div class="form-box field-card" id="checkBoxEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="previewData" >

                    <div id="insertedData" style="display: flex;flex-direction:row;">
                    <input type="checkbox" class="checkbox requiredField" required="" id="insertedInput">
                    <label id="insertedLabel" class="d-flex">` +
                            dict.label +
                            `<sup id="prevYesNo">*</sup>
            <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                            dict.tooltip +
                            `</span></i> </label>
                    </div>
                    </div>
                    <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>                   
     `;
                    if (dict.required == true) {
                        checkBox_elem
                            .querySelector("#checkBoxEle")
                            .querySelector("input").required = "required";
                    }
                    checkBox_elem.querySelector("#checkBoxEle").id =
                        checkBox_elem.querySelector("#checkBoxEle").id +
                        previewCloneNewId;
                } else {

                    let checkBox_elem = document.querySelector(
                        "#sectData" + count_sect
                    );
                    checkBox_elem.innerHTML +=
                        `
                    <div class="form-box field-card" id="checkBoxEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="previewData" >

                    <div id="insertedData" style="display: flex;flex-direction:row;">
                    <input type="checkbox" class="checkbox requiredField" required="" id="insertedInput">
                    <label id="insertedLabel" class="d-flex">` +
                            dict.label +
                            `<sup id="prevYesNo"  style="display: none;">*</sup>
            <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                            dict.tooltip +
                            `</span></i> </label>
                    </div>
                    </div>
                    <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>                   
     `;
                    if (dict.required == true) {
                        checkBox_elem
                            .querySelector("#checkBoxEle")
                            .querySelector("input").required = "required";
                    }
                    checkBox_elem.querySelector("#checkBoxEle").id =
                        checkBox_elem.querySelector("#checkBoxEle").id +
                        previewCloneNewId;

                }
            }
            
                else if (dict.id.replace(/[0-9]/g, "") == "buttonEle") {
                    // console.log("ID CHECK");
                    let button_elem = document.querySelector("#sectData" + count_sect);
                    button_elem.innerHTML +=
                        `
                    <div class="form-box field-card" id="buttonEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="insertedData" style="display:flex;flex-direction:row;">
                    <input type="` +
                        dict.inputType +
                        `" value="` +
                        dict.label +
                        `" class="btn primaryBtn" id="buttonBox2" style="padding:5px 10px;">
                    <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>                  
     `;
                    if (dict.buttonBlockStyle == false) {
                        document.querySelector("#buttonBox2").style.width =
                            "fit-content";
                    }
                    if (dict.required == true) {
                        button_elem
                            .querySelector("#buttonEle")
                            .querySelector("input").required = "required";
                    }
                    button_elem.querySelector("#buttonEle").id =
                        button_elem.querySelector("#buttonEle").id + previewCloneNewId;
                    document.querySelector("#buttonBox2").id = "insertedButton";
                }


                //karthika-image
                else if (dict.id.replace(/[0-9]/g, "") == "imageFieldEle") {

                    if(dict.required) {
                    let image_elem = document.querySelector(
                        "#sectData" + count_sect
                    );
                    image_elem.innerHTML += `
                <div class="form-box imageinput" id="imageFieldEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                <a href="javascript:void(0)" class="icons settingIcon"
                    onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                <a href="javascript:void(0)" class="icons moveIcon"
                    ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                <a href="javascript:void(0)" class="icons copyIcon"
                    onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                <a href="javascript:void(0)" class="icons deleteIcon"
                    onclick="removeCurrentDiv(event)"><span
                        class="tooltiptext remove">Remove</span></a>
            </div>
            <div id="previewData">
            <div class="form-box imageUpload">
        
            <input type="file" accept="image/*" name="upload" value="Upload Image" id="setFile"
                onchange="PlaceHolderImage(event)" />
        </div>
            <label id="insertedLabel" class="d-flex">${dict.label}<sup id="prevYesNo"
            class="prevDat">*</sup>
        <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                to add Document </span></i> </label>
                <img id="insertedImage" src="` +
                        dict.imgSRC +

                        ` alt="Submit" width="200"">
            
                                    </div>
                                    <div class="hover-space" id="hoverDemoSect"></div>
                                  </div>
                `;
                    try {

                        if (dict.required == true) {
                            parentDropArea
                                .querySelector("#imageFieldEle")
                                .querySelector("input").required = "required";
                        }
                        parentDropArea.querySelector("#imageFieldEle").id =
                            parentDropArea.querySelector("#imageFieldEle").id +
                            previewCloneNewId;
                    } catch (error) { }

                } else {

                    let image_elem = document.querySelector(
                        "#sectData" + count_sect
                    );
                    image_elem.innerHTML += `
                <div class="form-box imageinput" id="imageFieldEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                <a href="javascript:void(0)" class="icons settingIcon"
                    onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                <a href="javascript:void(0)" class="icons moveIcon"
                    ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                <a href="javascript:void(0)" class="icons copyIcon"
                    onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                <a href="javascript:void(0)" class="icons deleteIcon"
                    onclick="removeCurrentDiv(event)"><span
                        class="tooltiptext remove">Remove</span></a>
            </div>
            <div id="previewData">
            <div class="form-box imageUpload">
        
            <input type="file" accept="image/*" name="upload" value="Upload Image" id="setFile"
                onchange="PlaceHolderImage(event)" />
        </div>
            <label id="insertedLabel" class="d-flex">${dict.label}<sup id="prevYesNo"  style="display: none;"
            class="prevDat">*</sup>
        <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                to add Document </span></i> </label>
                <img id="insertedImage" src="` +
                        dict.imgSRC +

                        ` alt="Submit" width="200"">
            
                                    </div>
                                    <div class="hover-space" id="hoverDemoSect"></div>
                                  </div>
                `;
                    try {

                        if (dict.required == true) {
                            parentDropArea
                                .querySelector("#imageFieldEle")
                                .querySelector("input").required = "required";
                        }
                        parentDropArea.querySelector("#imageFieldEle").id =
                            parentDropArea.querySelector("#imageFieldEle").id +
                            previewCloneNewId;
                    } catch (error) { }

                }
            }

                //karthika-signature

                else if (dict.id.replace(/[0-9]/g, "") == "signatureEle") {

                    if(dict.required){
                    let signature_elem = document.querySelector(
                        "#sectData" + count_sect
                    );
                    signature_elem.innerHTML += `
                    <div class="form-box" id="signatureEle"> 
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon"
                        onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon"
                        ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span
                            class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon"
                        onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon"
                        onclick="removeCurrentDiv(event)"><span
                            class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="previewData">
                <label id="signBox2" class="d-flex">${dict.label}<sup id="prevYesNo"
                class="prevDat">*</sup>
            <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                    to add Document </span></i> </label>
        
                    <div class="row">
                    <div class="col-md-12">
                      <canvas id="sig-canvas" width="220" height="60">
                        Get a better browser, bro.
                      </canvas></div>
        
                      <div class="row">
                      <div class="col-md-12">
                        <button class="btn btn-primary" id="sig-submitBtn" style="padding: 5px 10px">Submit Signature </button>
                        <button class="btn btn-default" id="sig-clearBtn" style="padding: 5px 10px"> Clear Signature </button>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                    <div class="col-md-12">
                      <input type="text" id="sig-dataUrl" style="display: none"  class="form-control" rows="5"/>
                    </div>
                  </div>
                  <br />
                  <div class="row" style="display:none">
                  <div class="col-md-12">
                  id="sig-image" 
                  class="requiredField"
                  src="` +
                  dict.imgSRC +
        
                  ` alt="Your signature will go here!""
                  >
        
                  </div>
                  </div>
       
        
                </div>
        
        
                     <div class="hover-space" id="hoverDemoSect"></div>
        
        
                  </div>
                    
                    ` ;
                    try {

                        if (dict.required == true) {
                            parentDropArea
                                .querySelector("#signatureEle")
                                .querySelector("input").required = "required";
                        }
                        parentDropArea.querySelector("#signatureEle").id =
                            parentDropArea.querySelector("#signatureEle").id +
                            previewCloneNewId;
                    } catch (error) { }

                } else {

                    let signature_elem = document.querySelector(
                        "#sectData" + count_sect
                    );
                    signature_elem.innerHTML += `
                    <div class="form-box" id="signatureEle"> 
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon"
                        onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon"
                        ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span
                            class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon"
                        onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon"
                        onclick="removeCurrentDiv(event)"><span
                            class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="previewData">
                <label id="signBox2" class="d-flex">${dict.label}<sup id="prevYesNo"  style="display: none;"
                class="prevDat">*</sup>
            <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                    to add Document </span></i> </label>
        
                    <div class="row">
                    <div class="col-md-12">
                      <canvas id="sig-canvas" width="220" height="60">
                        Get a better browser, bro.
                      </canvas></div>
        
                      <div class="row">
                      <div class="col-md-12">
                        <button class="btn btn-primary" id="sig-submitBtn" style="padding: 5px 10px">Submit Signature </button>
                        <button class="btn btn-default" id="sig-clearBtn" style="padding: 5px 10px"> Clear Signature </button>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                    <div class="col-md-12">
                      <input type="text" id="sig-dataUrl" style="display: none"  class="form-control" rows="5"/>
                    </div>
                  </div>
                  <br />
                  <div class="row" style="display:none">
                  <div class="col-md-12">
                  id="sig-image" 
                  class="requiredField"
                  src="` +
                  dict.imgSRC +
        
                  ` alt="Your signature will go here!""
                  >
        
                  </div>
                  </div>
       
        
                </div>
        
        
                     <div class="hover-space" id="hoverDemoSect"></div>
        
        
                  </div>
                    
                    ` ;
                    try {

                        if (dict.required == true) {
                            parentDropArea
                                .querySelector("#signatureEle")
                                .querySelector("input").required = "required";
                        }
                        parentDropArea.querySelector("#signatureEle").id =
                            parentDropArea.querySelector("#signatureEle").id +
                            previewCloneNewId;
                    } catch (error) { }

                }
            }


            else if (dict.id.replace(/[0-9]/g, "") == "selectBoxEle") {

                if(dict.required) {
                // console.log("ID CHECK");
                let selectBox_elem = document.querySelector(
                    "#sectData" + count_sect
                );
                selectBox_elem.innerHTML +=
                    `
                <div class="form-box field-card" id="selectBoxEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                <label class="d-flex " id="insertedLabel">` +
                    dict.label +
                    ` <sup id="prevYesNo">*</sup> <i class="Questionicons f-left">
                <span class="R-st" id="insertedTooltip">` +
                    dict.tooltip +
                    `</span></i></label>
                <select class="form-control requiredField" id="currentInput" >
                <!-- <option id="previewRow0"></option> 
                </select>
                <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>`;

                let j = 0;
                for (var propName in dict.selectData) {
                    document.querySelector("#currentInput").innerHTML +=
                        `<option id="previewRow` +
                        j +
                        `" value ='` +
                        dict.selectData[propName] +
                        `'">` +
                        propName +
                        `</option>`;
                    j += 1;
                }
                document.querySelector("#currentInput").id = "insertedInput";

                selectBox_elem.querySelector("#selectBoxEle").id =
                    selectBox_elem.querySelector("#selectBoxEle").id +
                    previewCloneNewId;
            } else {
                let selectBox_elem = document.querySelector(
                    "#sectData" + count_sect
                );
                selectBox_elem.innerHTML +=
                    `
                <div class="form-box field-card" id="selectBoxEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                <label class="d-flex " id="insertedLabel">` +
                    dict.label +
                    ` <sup id="prevYesNo"  style="display: none;">*</sup> <i class="Questionicons f-left">
                <span class="R-st" id="insertedTooltip">` +
                    dict.tooltip +
                    `</span></i></label>
                <select class="form-control requiredField" id="currentInput" >
                <!-- <option id="previewRow0"></option> 
                </select>
                <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>`;

                let j = 0;
                for (var propName in dict.selectData) {
                    document.querySelector("#currentInput").innerHTML +=
                        `<option id="previewRow` +
                        j +
                        `" value ='` +
                        dict.selectData[propName] +
                        `'">` +
                        propName +
                        `</option>`;
                    j += 1;
                }
                document.querySelector("#currentInput").id = "insertedInput";

                selectBox_elem.querySelector("#selectBoxEle").id =
                    selectBox_elem.querySelector("#selectBoxEle").id +
                    previewCloneNewId;
            }}



            else if (dict.id.replace(/[0-9]/g, "") == "radioEle") {

                if(dict.required) {
                // console.log("ID CHECK");
                let radio_elem = document.querySelector("#sectData" + count_sect);
                radio_elem.innerHTML +=
                    `
                <div class="form-box field-card" id="radioEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>

                <div id="insertedData" style="flex-direction: column;">
                <label class="d-flex " id="insertedLabel">` +
                    dict.label +
                    ` 
                <sup id="prevYesNo">*</sup> <i class="Questionicons f-left">
                <span class="R-st" id="insertedTooltip">` +
                    dict.tooltip +
                    `</span></i></label>
                <div class="requiredField" id="currentInput" style="vertical-align: text-top;" >
                <!-- <option id="previewRow0"></option> 
                </div>

                <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>`;

                let j = 0;
                for (var propName in dict.radioData) {
                    document.querySelector("#currentInput").innerHTML +=
                        `<input type=radio name='` +
                        dict.radioName +
                        `' id="radioPrevRow` +
                        j +
                        `" value ='` +
                        propName +
                        `'>` +
                        `<label>${dict.radioData[propName]}</label>
                        </option>`;
                    j += 1;
                }
                document.querySelector("#currentInput").id = "insertedInput";

                radio_elem.querySelector("#radioEle").id =
                    radio_elem.querySelector("#radioEle").id + previewCloneNewId;

            } else {
                let radio_elem = document.querySelector("#sectData" + count_sect);
                radio_elem.innerHTML +=
                    `
                <div class="form-box field-card" id="radioEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>

                <div id="insertedData" style="flex-direction: column;">
                <label class="d-flex " id="insertedLabel">` +
                    dict.label +
                    ` 
                <sup id="prevYesNo"  style="display: none;">*</sup> <i class="Questionicons f-left">
                <span class="R-st" id="insertedTooltip">` +
                    dict.tooltip +
                    `</span></i></label>
                <div class="requiredField" id="currentInput" style="vertical-align: text-top;" >
                <!-- <option id="previewRow0"></option> 
                </div>

                <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>`;

                let j = 0;
                for (var propName in dict.radioData) {
                    document.querySelector("#currentInput").innerHTML +=
                        `<input type=radio name='` +
                        dict.radioName +
                        `' id="radioPrevRow` +
                        j +
                        `" value ='` +
                        propName +
                        `'>` +
                        `<label>${dict.radioData[propName]}</label>
                        </option>`;
                    j += 1;
                }
                document.querySelector("#currentInput").id = "insertedInput";

                radio_elem.querySelector("#radioEle").id =
                    radio_elem.querySelector("#radioEle").id + previewCloneNewId;

            }}
                
                
                else if (dict.id.replace(/[0-9]/g, "") == "urlFieldEle") {

                    if(dict.required) {
                    let urlField_elem = document.querySelector(
                        "#sectData" + count_sect
                    );
                    urlField_elem.innerHTML +=
                        `<div class="form-box" id="urlFieldEle">
    
            <div class="hover-space" id="hoverDemoTop"></div>
            <div class="formboxedit">
                <a href="javascript:void(0)" class="icons settingIcon"
                    onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                <a href="javascript:void(0)" class="icons moveIcon"
                    ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                <a href="javascript:void(0)" class="icons pasteicon"><span
                        class="tooltiptext">Paste</span></a>
                <a href="javascript:void(0)" class="icons copyIcon"
                    onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                <a href="javascript:void(0)" class="icons deleteIcon"
                    onclick="removeCurrentDiv(event)"><span
                        class="tooltiptext remove">Remove</span></a>
            </div>
            <div id="previewData">
                <label id="linkSecond" class="d-flex">` +
                        dict.label +
                        `` +
                        `<sup id="prevYesNo">*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` + dict.placeholder +
                        `</span></i> </label>
                <input type="text" class="form-control requiredField" id="urlSecond"
                placeholder="${dict.placeholder}" required="" />
                    </div>
                    <div class="hover-space" id="hoverDemoBot"></div>
                </div>`;
                    if (dict.required == true) {
                        urlField_elem
                            .querySelector("#urlFieldEle")
                            .querySelector("input").required = "required";
                    }
                    urlField_elem.querySelector("#urlFieldEle").id =
                        urlField_elem.querySelector("#urlFieldEle").id + previewCloneNewId;
                } else {
                    let urlField_elem = document.querySelector(
                        "#sectData" + count_sect
                    );
                    urlField_elem.innerHTML +=
                        `<div class="form-box" id="urlFieldEle">
    
            <div class="hover-space" id="hoverDemoTop"></div>
            <div class="formboxedit">
                <a href="javascript:void(0)" class="icons settingIcon"
                    onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                <a href="javascript:void(0)" class="icons moveIcon"
                    ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                <a href="javascript:void(0)" class="icons pasteicon"><span
                        class="tooltiptext">Paste</span></a>
                <a href="javascript:void(0)" class="icons copyIcon"
                    onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                <a href="javascript:void(0)" class="icons deleteIcon"
                    onclick="removeCurrentDiv(event)"><span
                        class="tooltiptext remove">Remove</span></a>
            </div>
            <div id="previewData">
                <label id="linkSecond" class="d-flex">` +
                        dict.label +
                        `` +
                        `<sup id="prevYesNo"  style="display: none;">*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` + dict.placeholder +
                        `</span></i> </label>
                <input type="text" class="form-control requiredField" id="urlSecond"
                placeholder="${dict.placeholder}" required="" />
                    </div>
                    <div class="hover-space" id="hoverDemoBot"></div>
                </div>`;
                    if (dict.required == true) {
                        urlField_elem
                            .querySelector("#urlFieldEle")
                            .querySelector("input").required = "required";
                    }
                    urlField_elem.querySelector("#urlFieldEle").id =
                        urlField_elem.querySelector("#urlFieldEle").id + previewCloneNewId;
                }
                }
                

                else if (dict.id.replace(/[0-9]/g, "") == "dateAndTimeEle") {

                    if(dict.required) {
                    let date_elem = document.querySelector("#sectData" + count_sect);
                    date_elem.innerHTML +=
                        `<div class="form-box" id="dateAndTimeEle">
    
            <div class="hover-space" id="hoverDemoTop"></div>
            <div class="formboxedit">
                <a href="javascript:void(0)" class="icons settingIcon"
                    onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                <a href="javascript:void(0)" class="icons moveIcon"
                    ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                <a href="javascript:void(0)" class="icons pasteicon"><span
                        class="tooltiptext">Paste</span></a>
                <a href="javascript:void(0)" class="icons copyIcon"
                    onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                <a href="javascript:void(0)" class="icons deleteIcon"
                    onclick="removeCurrentDiv(event)"><span
                        class="tooltiptext remove">Remove</span></a>
            </div>
            <div id="previewData">
                <label id="dateAndTime2" class="d-flex">` +
                        dict.label +
                        `` +
                        `<sup id="prevYesNo">*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` + dict.placeholder +
                        `</span></i> </label> <input id="dt" class="form-control requiredField"  type="datetime-local" />
            </div>
            <div class="hover-space" id="hoverDemoBot"></div>
        </div>
    </div>`;
                    if (dict.required == true) {
                        date_elem
                            .querySelector("#dateAndTimeEle")
                            .querySelector("input").required = "required";
                    }
                    date_elem.querySelector("#dateAndTimeEle").id =
                        date_elem.querySelector("#dateAndTimeEle").id + previewCloneNewId;
                } else {

                    let date_elem = document.querySelector("#sectData" + count_sect);
                    date_elem.innerHTML +=
                        `<div class="form-box" id="dateAndTimeEle">
    
            <div class="hover-space" id="hoverDemoTop"></div>
            <div class="formboxedit">
                <a href="javascript:void(0)" class="icons settingIcon"
                    onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                <a href="javascript:void(0)" class="icons moveIcon"
                    ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                <a href="javascript:void(0)" class="icons pasteicon"><span
                        class="tooltiptext">Paste</span></a>
                <a href="javascript:void(0)" class="icons copyIcon"
                    onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                <a href="javascript:void(0)" class="icons deleteIcon"
                    onclick="removeCurrentDiv(event)"><span
                        class="tooltiptext remove">Remove</span></a>
            </div>
            <div id="previewData">
                <label id="dateAndTime2" class="d-flex">` +
                        dict.label +
                        `` +
                        `<sup id="prevYesNo"  style="display: none;">*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` + dict.placeholder +
                        `</span></i> </label> <input id="dt" class="form-control requiredField"  type="datetime-local" />
            </div>
            <div class="hover-space" id="hoverDemoBot"></div>
        </div>
    </div>`;
                    if (dict.required == true) {
                        date_elem
                            .querySelector("#dateAndTimeEle")
                            .querySelector("input").required = "required";
                    }
                    date_elem.querySelector("#dateAndTimeEle").id =
                        date_elem.querySelector("#dateAndTimeEle").id + previewCloneNewId;
                }}
                
                else if (dict.id.replace(/[0-9]/g, "") == "titleBoxEle") {

                    if(dict.required) {
                    let titleBox_elem = document.querySelector(
                        "#sectData" + count_sect
                    );
                    // console.log(dict);
                    titleBox_elem.innerHTML +=
                        `<div class="form-box checkbox" id="titleBoxEle">
            <div class="hover-space" id="hoverDemoTop"></div>
            <div class="formboxedit">
              <a href="javascript:void(0)" class="icons settingIcon"
                onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
              <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span
                  class="tooltiptext">Move</span></a>
              <a href="javascript:void(0)" class="icons pasteicon"><span
                  class="tooltiptext">Paste</span></a>
              <a href="javascript:void(0)" class="icons copyIcon"
                onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
              <!-- <a href="javascript:void(0)" class="icons wrenchIcon" onclick="createJSON(event)"><span class="tooltiptext">Edit JSON</span></a> -->
              <a href="javascript:void(0)" class="icons deleteIcon"
                onclick="removeCurrentDiv(event)"><span
                  class="tooltiptext remove">Remove</span></a>
            </div>
            <div id="previewData" >
              <div >
    
            
              <h1 ><label id="titleBox2"
               class="d-flex" style="font-size: 20px !important;font-weight:550;">` +
                        dict.label +
                        `<sup id="prevYesNo">*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                        dict.placeholder +
                        `</span></i></label></h1>
            <input type="text" style="display: none;" class="checkbox requiredField" required />
           </div>
         </div>
    
         <div class="hover-space" id="hoverDemoBot"></div>
       </div>
     </div>`;
                    if (dict.required == true) {
                        titleBox_elem
                            .querySelector("#titleBoxEle")
                            .querySelector("input").required = "required";
                    }
                    titleBox_elem.querySelector("#titleBoxEle").id =
                        titleBox_elem.querySelector("#titleBoxEle").id + previewCloneNewId;

                }else {
                    let titleBox_elem = document.querySelector(
                        "#sectData" + count_sect
                    );
                    // console.log(dict);
                    titleBox_elem.innerHTML +=
                        `<div class="form-box checkbox" id="titleBoxEle">
            <div class="hover-space" id="hoverDemoTop"></div>
            <div class="formboxedit">
              <a href="javascript:void(0)" class="icons settingIcon"
                onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
              <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span
                  class="tooltiptext">Move</span></a>
              <a href="javascript:void(0)" class="icons pasteicon"><span
                  class="tooltiptext">Paste</span></a>
              <a href="javascript:void(0)" class="icons copyIcon"
                onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
              <!-- <a href="javascript:void(0)" class="icons wrenchIcon" onclick="createJSON(event)"><span class="tooltiptext">Edit JSON</span></a> -->
              <a href="javascript:void(0)" class="icons deleteIcon"
                onclick="removeCurrentDiv(event)"><span
                  class="tooltiptext remove">Remove</span></a>
            </div>
            <div id="previewData" >
              <div >
    
            
              <h1 ><label id="titleBox2"
               class="d-flex" style="font-size: 20px !important;font-weight:550;">` +
                        dict.label +
                        `<sup id="prevYesNo"  style="display: none;">*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                        dict.placeholder +
                        `</span></i></label></h1>
            <input type="text" style="display: none;" class="checkbox requiredField" required />
           </div>
         </div>
    
         <div class="hover-space" id="hoverDemoBot"></div>
       </div>
     </div>`;
                    if (dict.required == true) {
                        titleBox_elem
                            .querySelector("#titleBoxEle")
                            .querySelector("input").required = "required";
                    }
                    titleBox_elem.querySelector("#titleBoxEle").id =
                        titleBox_elem.querySelector("#titleBoxEle").id + previewCloneNewId;

                                }                }


                else if (dict.id.replace(/[0-9]/g, "") == "dialogueEle") {

                    if(dict.required){
                    let dialogue_elem = document.querySelector(
                        "#sectData" + count_sect
                    );
                    dialogue_elem.innerHTML +=
                        `
                    <div class="form-box" id="dialogueEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon"
                        onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon"
                        ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span
                            class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon"
                        onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon"
                        onclick="removeCurrentDiv(event)"><span
                            class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                <label id="insertedLabel" class="d-flex">`+
                        dict.label +
                        `<sup id="prevYesNo">*</sup>
                <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                        dict.placeholder +
                        `</span></i> </label>
                <input type="text" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}"    
                required="">
            </div>
            <div class="hover-space" id="hoverDemoBot"></div>
        <div id="topLane"></div>
        <div id="botLane"></div>
        </div>                  
`  ;
                    if (dict.required == true) {
                        dialogue_elem
                            .querySelector("#dialogueEle")
                            .querySelector("input").required = "required";
                    }
                    dialogue_elem.querySelector("#dialogueEle").id =
                        dialogue_elem.querySelector("#dialogueEle").id + previewCloneNewId;
                } else {
                    let dialogue_elem = document.querySelector(
                        "#sectData" + count_sect
                    );
                    dialogue_elem.innerHTML +=
                        `
                    <div class="form-box" id="dialogueEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon"
                        onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon"
                        ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span
                            class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon"
                        onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon"
                        onclick="removeCurrentDiv(event)"><span
                            class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                <label id="insertedLabel" class="d-flex">`+
                        dict.label +
                        `<sup id="prevYesNo"  style="display: none;">*</sup>
                <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                        dict.placeholder +
                        `</span></i> </label>
                <input type="text" class="form-control requiredField" id="insertedInput" placeholder="${dict.placeholder}"    
                required="">
            </div>
            <div class="hover-space" id="hoverDemoBot"></div>
        <div id="topLane"></div>
        <div id="botLane"></div>
        </div>                  
`  ;
                    if (dict.required == true) {
                        dialogue_elem
                            .querySelector("#dialogueEle")
                            .querySelector("input").required = "required";
                    }
                    dialogue_elem.querySelector("#dialogueEle").id =
                        dialogue_elem.querySelector("#dialogueEle").id + previewCloneNewId;
                }
            }

                else if (dict.id.replace(/[0-9]/g, "") == "videoembedEle") {

                    if(dict.required) {
                    let video_elem = document.querySelector(
                        "#sectData" + count_sect
                    );
                    video_elem.innerHTML +=
                        `<div class="form-box" id="videoembedEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon"
                        onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon"
                        ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span
                            class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon"
                        onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon"
                        onclick="removeCurrentDiv(event)"><span
                            class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="previewData">
                <label id="insertedLabel" class="d-flex">${dict.label}
                <sup id="prevYesNo" 
        class="prevDat">*</sup>
    <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
            to add Document </span></i> </label>
            <iframe id="insertedInput" class="videoSet" src="`+ dict.videoSRC + `"  >
            </iframe>

            </div>
            <div class="hover-space" id="hoverDemoSect"></div>
          </div>


        
        `;
                    try {

                        if (dict.required == true) {
                            parentDropArea
                                .querySelector("#videoembedEle")
                                .querySelector("input").required = "required";
                        }
                        parentDropArea.querySelector("#videoembedEle").id =
                            parentDropArea.querySelector("#videoembedEle").id +
                            previewCloneNewId;
                    } catch (error) { }

                } else {

                    let video_elem = document.querySelector(
                        "#sectData" + count_sect
                    );
                    video_elem.innerHTML +=
                        `<div class="form-box" id="videoembedEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon"
                        onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon"
                        ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span
                            class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon"
                        onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon"
                        onclick="removeCurrentDiv(event)"><span
                            class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="previewData">
                <label id="insertedLabel" class="d-flex">${dict.label}
                <sup id="prevYesNo"  style="display: none;"
        class="prevDat">*</sup>
    <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
            to add Document </span></i> </label>
            <iframe id="insertedInput" class="videoSet" src="`+ dict.videoSRC + `"  >
            </iframe>

            </div>
            <div class="hover-space" id="hoverDemoSect"></div>
          </div>


        
        `;
                    try {

                        if (dict.required == true) {
                            parentDropArea
                                .querySelector("#videoembedEle")
                                .querySelector("input").required = "required";
                        }
                        parentDropArea.querySelector("#videoembedEle").id =
                            parentDropArea.querySelector("#videoembedEle").id +
                            previewCloneNewId;
                    } catch (error) { }
                }
            }


                //karthika-table
                else if (dict.id.replace(/[0-9]/g, "") == "tableEle") {

                    if(dict.required) {
                    let table_elem = document.querySelector(
                        "#sectData" + count_sect
                    );
                    table_elem.innerHTML += `
                <div class="form-box" id="tableEle"> 
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
        <a href="javascript:void(0)" class="icons settingIcon"
            onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
        <a href="javascript:void(0)" class="icons moveIcon"
            ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
        <a href="javascript:void(0)" class="icons pasteicon"><span
                class="tooltiptext">Paste</span></a>
        <a href="javascript:void(0)" class="icons copyIcon"
            onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
        <a href="javascript:void(0)" class="icons deleteIcon"
            onclick="removeCurrentDiv(event)"><span
                class="tooltiptext remove">Remove</span></a>
             </div> 
             <div id="previewData">
             <label id="insertedLable" class="d-flex">${dict.label}
             <sup id="prevYesNo"
             class="prevDat">*</sup>
         <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                 to add Document </span></i> </label>
                 <samp id="insertedInput" class="tableStyle" accept="">${dict.table}</samp>
                 </div>
                 <div class="hover-space" id="hoverDemoSect"></div>
         
             </div>

            
                
                `;
                    try {

                        if (dict.required == true) {
                            parentDropArea
                                .querySelector("#tableEle")
                                .querySelector("input").required = "required";
                        }
                        parentDropArea.querySelector("#tableEle").id =
                            parentDropArea.querySelector("#tableEle").id +
                            previewCloneNewId;
                    } catch (error) { }

                } else {
                    let table_elem = document.querySelector(
                        "#sectData" + count_sect
                    );
                    table_elem.innerHTML += `
                <div class="form-box" id="tableEle"> 
                        <div class="hover-space" id="hoverDemoTop"></div>
                        <div class="formboxedit">
        <a href="javascript:void(0)" class="icons settingIcon"
            onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
        <a href="javascript:void(0)" class="icons moveIcon"
            ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
        <a href="javascript:void(0)" class="icons pasteicon"><span
                class="tooltiptext">Paste</span></a>
        <a href="javascript:void(0)" class="icons copyIcon"
            onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
        <a href="javascript:void(0)" class="icons deleteIcon"
            onclick="removeCurrentDiv(event)"><span
                class="tooltiptext remove">Remove</span></a>
             </div> 
             <div id="previewData">
             <label id="insertedLable" class="d-flex">${dict.label}
             <sup id="prevYesNo"  style="display: none;"
             class="prevDat">*</sup>
         <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                 to add Document </span></i> </label>
                 <samp id="insertedInput" class="tableStyle" accept="">${dict.table}</samp>
                 </div>
                 <div class="hover-space" id="hoverDemoSect"></div>
         
             </div>

            
                
                `;
                    try {

                        if (dict.required == true) {
                            parentDropArea
                                .querySelector("#tableEle")
                                .querySelector("input").required = "required";
                        }
                        parentDropArea.querySelector("#tableEle").id =
                            parentDropArea.querySelector("#tableEle").id +
                            previewCloneNewId;
                    } catch (error) { }

                }
            }



                else if (dict.id.replace(/[0-9]/g, "") == "documentEle") {

                    if(dict.required) {
                    let dialogue_elem = document.querySelector(
                        "#sectData" + count_sect
                    );
                    dialogue_elem.innerHTML += `<div class="form-box checkbox" id="documentEle">
    
    
            <div class="hover-space" id="hoverDemoTop"></div>
            <div class="formboxedit">
              <a href="javascript:void(0)" class="icons settingIcon"
                onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
              <a href="javascript:void(0)" class="icons moveIcon"
                ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
              <a href="javascript:void(0)" class="icons copyIcon"
                onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
              <!-- <a href="javascript:void(0)" class="icons wrenchIcon" onclick="createJSON(event)"><span class="tooltiptext">Edit JSON</span></a> -->
              <a href="javascript:void(0)" class="icons deleteIcon"
              onclick="removeCurrentDiv(event)"><span
                  class="tooltiptext remove">Remove</span></a>
            </div>
            <div id="previewData">
            <label id="insertedLabel" class="d-flex">${dict.label}<sup id="prevYesNo"
            class="prevDat">*</sup>
        <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                to add Document </span></i> </label>
            <input type="file" class="btn primaryBtn document" id="insertedInput" accept="${dict.documentType}" onchange="openFile(event)">
            <!-- <button onclick="doupload()" name="submit">Upload File</button> -->
          </div>
            <div class="hover-space" id="hoverDemoSect"></div>
          </div>`;
                }
            } else {

                let dialogue_elem = document.querySelector(
                    "#sectData" + count_sect
                );
                dialogue_elem.innerHTML += `<div class="form-box checkbox" id="documentEle">


        <div class="hover-space" id="hoverDemoTop"></div>
        <div class="formboxedit">
          <a href="javascript:void(0)" class="icons settingIcon"
            onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
          <a href="javascript:void(0)" class="icons moveIcon"
            ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
          <a href="javascript:void(0)" class="icons copyIcon"
            onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
          <!-- <a href="javascript:void(0)" class="icons wrenchIcon" onclick="createJSON(event)"><span class="tooltiptext">Edit JSON</span></a> -->
          <a href="javascript:void(0)" class="icons deleteIcon"
          onclick="removeCurrentDiv(event)"><span
              class="tooltiptext remove">Remove</span></a>
        </div>
        <div id="previewData">
        <label id="insertedLabel" class="d-flex">${dict.label}<sup id="prevYesNo"  style="display: none;"
        class="prevDat">*</sup>
    <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
            to add Document </span></i> </label>
        <input type="file" class="btn primaryBtn document" id="insertedInput" accept="${dict.documentType}" onchange="openFile(event)">
        <!-- <button onclick="doupload()" name="submit">Upload File</button> -->
      </div>
        <div class="hover-space" id="hoverDemoSect"></div>
      </div>`;
            }

            }
            count_sect++;
        }







        //for single elem           
        if (obj[i].id.replace(/[0-9]/g, "") == "textFieldEle") {
            if(obj[i].required) {
                // alert(obj[i].required)
            parentDropArea.innerHTML +=
                `
                <div class="form-box field-card" id="textFieldEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                    <label id="insertedLabel" class="d-flex">` +
                obj[i].label +

                `<sup id="prevYesNo"  
                class="prevDat">*</sup>
                <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">`+ obj[i].placeholder +
                `</span></i> </label>
                    <input type="text" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}" required="">
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `;
            }
            else{
                parentDropArea.innerHTML +=
                `
                <div class="form-box field-card" id="textFieldEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                    <label id="insertedLabel" class="d-flex">` +
                obj[i].label +

                `<sup id="prevYesNo"  style="display: none;"
                class="prevDat">*</sup>
                <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">`+ obj[i].placeholder +
                `</span></i> </label>
                    <input type="text" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}" required="">
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `;
            }
            if (obj[i].required == true) {
                parentDropArea
                    .querySelector("#textFieldEle")
                    .querySelector("input").required = "required";
            }
            parentDropArea.querySelector("#textFieldEle").id =
                parentDropArea.querySelector("#textFieldEle").id + previewCloneNewId;

        }
      
        //karthika-number
        else if (obj[i].id.replace(/[0-9]/g, "") == "numberEle") {
            
            // console.log("ID CHECK");
            if(obj[i].required) {
                // alert(obj[i].required)
            parentDropArea.innerHTML +=
                `
                <div class="form-box field-card" id="numberEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                    <label id="insertedLabel" class="d-flex">` +
                obj[i].label +
                `<sup id="prevYesNo">*</sup>
                <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">`+
                obj[i].placeholder +
                `</span></i> </label>
                    <input type="number" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}" required="">
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `;}
          else{
            parentDropArea.innerHTML +=
            `
            <div class="form-box field-card" id="numberEle">
            <div class="hover-space" id="hoverDemoTop"></div>
            <div class="formboxedit">
                <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
            </div>
            <div id="insertedData" style="flex-direction: column;">
                <label id="insertedLabel" class="d-flex">` +
            obj[i].label +
            `<sup id="prevYesNo"  style="display: none;">*</sup>
            <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">`+
            obj[i].placeholder +
            `</span></i> </label>
                <input type="number" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}" required="">
            </div>
            <div class="hover-space" id="hoverDemoBot"></div>
        <div id="topLane"></div>
        <div id="botLane"></div>
        </div>                  
`;
          }
            if (obj[i].required == true) {
                parentDropArea
                    .querySelector("#numberEle")
                    .querySelector("input").required = "required";
            }
            parentDropArea.querySelector("#numberEle").id =
                parentDropArea.querySelector("#numberEle").id + previewCloneNewId;
        } else if (obj[i].id.replace(/[0-9]/g, "") == "phoneEle") {
            // console.log("ID CHECK");
            if(obj[i].required) {
                // alert(obj[i].required)
            parentDropArea.innerHTML +=
                `
                <div class="form-box field-card" id="phoneEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                    <label id="insertedLabel" class="d-flex">` +
                obj[i].label +
                `<sup id="prevYesNo" >*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                obj[i].placeholder +
                `</span></i> </label>
                    <input type="phone" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}" required="">
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `;
            }
            else{
                parentDropArea.innerHTML +=
                `
                <div class="form-box field-card" id="phoneEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                    <label id="insertedLabel" class="d-flex">` +
                obj[i].label +
                `<sup id="prevYesNo"  style="display: none;">*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                obj[i].placeholder +
                `</span></i> </label>
                    <input type="phone" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}" required="">
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `;
            }
            if (obj[i].required == true) {
                parentDropArea
                    .querySelector("#phoneEle")
                    .querySelector("input").required = "required";
            }
            parentDropArea.querySelector("#phoneEle").id =
                parentDropArea.querySelector("#phoneEle").id + previewCloneNewId;
        } else if (obj[i].id.replace(/[0-9]/g, "") == "emailEle") {
            // console.log("ID CHECK");
            if(obj[i].required) {
                // alert(obj[i].required)
            parentDropArea.innerHTML +=
                `
                <div class="form-box field-card" id="emailEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                    <label id="insertedLabel" class="d-flex">` +
                obj[i].label +
                `<sup id="prevYesNo" >*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                obj[i].tooltip +
                `</span></i> </label>
                    <input type="email" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}" required="">
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `;
            }
            else{
                parentDropArea.innerHTML +=
                `
                <div class="form-box field-card" id="emailEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                    <label id="insertedLabel" class="d-flex">` +
                obj[i].label +
                `<sup id="prevYesNo"  style="display: none;">*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                obj[i].tooltip +
                `</span></i> </label>
                    <input type="email" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}" required="">
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `;
            }
            if (obj[i].required == true) {
                parentDropArea
                    .querySelector("#emailEle")
                    .querySelector("input").required = "required";
            }
            parentDropArea.querySelector("#emailEle").id =
                parentDropArea.querySelector("#emailEle").id + previewCloneNewId;
        } else if (obj[i].id.replace(/[0-9]/g, "") == "submitArea") {
            // console.log("ID CHECK");
            if(obj[i].required) {
            parentDropArea.innerHTML +=
                `
                <div class="form-box field-card" id="submitArea">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                    <label id="insertedLabel" class="d-flex">` +
                obj[i].label +
                `<sup id="prevYesNo" >*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                obj[i].tooltip +
                `</span></i> </label>
                    <textarea rows="5" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}" required=""></textarea>
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `;            
            }
            else{
                parentDropArea.innerHTML +=
                `
                <div class="form-box field-card" id="submitArea">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                    <label id="insertedLabel" class="d-flex">` +
                obj[i].label +
                `<sup id="prevYesNo"  style="display: none;">*</sup>
                        <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                obj[i].tooltip +
                `</span></i> </label>
                    <textarea rows="5" class="form-control requiredField" id="insertedInput" placeholder="${obj[i].placeholder}" required=""></textarea>
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `; 
            }
            
                if (obj[i].required == true) {
                    parentDropArea
                        .querySelector("#submitArea")
                        .querySelector("textarea").required = "required";
                }
                parentDropArea.querySelector("#submitArea").id =
                    parentDropArea.querySelector("#submitArea").id + previewCloneNewId;
            

        }

        //karthika-promise
        else if (obj[i].id.replace(/[0-9]/g, "") == "promiseEle") {
            if(obj[i].required) {
            parentDropArea.innerHTML +=
                `<div class="form-box" id="promiseEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                <a href="javascript:void(0)" class="icons settingIcon"
                    onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                <a href="javascript:void(0)" class="icons moveIcon"
                    ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span
                        class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon"
                    onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                <a href="javascript:void(0)" class="icons deleteIcon"
                    onclick="removeCurrentDiv(event)"><span
                        class="tooltiptext remove">Remove</span></a>
            </div>
            <div id="insertedData" style="flex-direction: column;">
            <label id="insertedLabel" class="d-flex">` + obj[i].label +
                `<sup id="prevYesNo"  >*</sup>
            <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                obj[i].tooltip +
                `</span></i> </label>
            <textarea class="form-control requiredField" id="insertedInput"  value='[{
                "type": "select",
                ....,
                dataSrc: async () => {
                return await fetch("/api/somepath").then((data) => data.json())
                },
                ....
                }]'
            placeholder="${obj[i].placeholder}" required="" >	[{
                "type": "select",
                ....,
                dataSrc: async () => {
                return await fetch("/api/somepath").then((data) => data.json())
                },
                ....
                }]</textarea>  
            </div>
            <div class="hover-space" id="hoverDemoBot"></div>
        <div id="topLane"></div>
        <div id="botLane"></div>
        </div>        
                `;
            }
            else{
                parentDropArea.innerHTML +=
                `<div class="form-box" id="promiseEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                <a href="javascript:void(0)" class="icons settingIcon"
                    onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                <a href="javascript:void(0)" class="icons moveIcon"
                    ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span
                        class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon"
                    onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                <a href="javascript:void(0)" class="icons deleteIcon"
                    onclick="removeCurrentDiv(event)"><span
                        class="tooltiptext remove">Remove</span></a>
            </div>
            <div id="insertedData" style="flex-direction: column;">
            <label id="insertedLabel" class="d-flex">` + obj[i].label +
                `<sup id="prevYesNo"  style="display: none;">*</sup>
            <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                obj[i].tooltip +
                `</span></i> </label>
            <textarea class="form-control requiredField" id="insertedInput"  value='[{
                "type": "select",
                ....,
                dataSrc: async () => {
                return await fetch("/api/somepath").then((data) => data.json())
                },
                ....
                }]'
            placeholder="${obj[i].placeholder}" required="" >	[{
                "type": "select",
                ....,
                dataSrc: async () => {
                return await fetch("/api/somepath").then((data) => data.json())
                },
                ....
                }]</textarea>  
            </div>
            <div class="hover-space" id="hoverDemoBot"></div>
        <div id="topLane"></div>
        <div id="botLane"></div>
        </div>        
                `;

            }





            try {

                if (obj[i].required == true) {
                    parentDropArea
                        .querySelector("#promiseEle")
                        .querySelector("input").required = "required";
                }
                parentDropArea.querySelector("#promiseEle").id =
                    parentDropArea.querySelector("#promiseEle").id + previewCloneNewId;
            } catch (error) { }


        }


        else if (obj[i].id.replace(/[0-9]/g, "") == "checkBoxEle") {
            if(obj[i].required) {
            parentDropArea.innerHTML +=
                `
                <div class="form-box field-card" id="checkBoxEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="previewData" >

                <div id="insertedData" style="display: flex;flex-direction:row;">
                <input type="checkbox" class="checkbox requiredField" required="" id="insertedInput">
                <label id="insertedLabel" class="d-flex">` +
                obj[i].label +
                `<sup id="prevYesNo" >*</sup>
				<i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                obj[i].tooltip +
                `</span></i> </label>
                </div>
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `;
            }
            else{
                parentDropArea.innerHTML +=
                `
                <div class="form-box field-card" id="checkBoxEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="previewData" >

                <div id="insertedData" style="display: flex;flex-direction:row;">
                <input type="checkbox" class="checkbox requiredField" required="" id="insertedInput">
                <label id="insertedLabel" class="d-flex">` +
                obj[i].label +
                `<sup id="prevYesNo"  style="display: none;">*</sup>
				<i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                obj[i].tooltip +
                `</span></i> </label>
                </div>
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>                  
 `;

            }


            if (obj[i].required == true) {
                parentDropArea
                    .querySelector("#checkBoxEle")
                    .querySelector("input").required = "required";
            }
            parentDropArea.querySelector("#checkBoxEle").id =
                parentDropArea.querySelector("#checkBoxEle").id + previewCloneNewId;
        } else if (obj[i].id.replace(/[0-9]/g, "") == "buttonEle") {
        
            parentDropArea.innerHTML +=
                `
                <div class="form-box field-card" id="buttonEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>

           <div id="previewData">


                <div id="insertedData" style="display:flex;flex-direction:row;">
                <input type="` +
                obj[i].inputType +
                `" value="` +
                obj[i].label +
                `" class="btn primaryBtn" id="buttonBox2" style="padding:5px 10px;"></div>
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
            <div id="topLane"></div>
            <div id="botLane"></div>
            </div>   
            
            
 `;
            
       
            if (obj[i].buttonBlockStyle == false) {
                document.querySelector("#buttonBox2").style.width = "fit-content";
            }
            if (obj[i].required == true) {
                parentDropArea
                    .querySelector("#buttonEle")
                    .querySelector("input").required = "required";
            }
            parentDropArea.querySelector("#buttonEle").id =
                parentDropArea.querySelector("#buttonEle").id + previewCloneNewId;
            document.querySelector("#buttonBox2").id = "insertedButton";
        }



        //karthika-image
        else if (obj[i].id.replace(/[0-9]/g, "") == "imageFieldEle") {
            if(obj[i].required) {
            parentDropArea.innerHTML += `
            <div class="form-box field-card" id="imageFieldEle">
            <div class="hover-space" id="hoverDemoTop"></div>
                            <div class="formboxedit">
                <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
            </div>
            <div id="previewData">
            <div class="form-box imageUpload">
        
            <input type="file" accept="image/*" name="upload" value="Upload Image" id="setFile"
                onchange="PlaceHolderImage(event)" />
        </div>
            <label id="insertedLabel" class="d-flex">${obj[i].label}<sup id="prevYesNo" 
            class="prevDat">*</sup>
        <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                to add Document </span></i> </label>
                <img id="insertedImage"  src="` +
                obj[i].imgSRC +

                ` alt="Submit" width="200"">
            
                                    </div>
                                    <div class="hover-space" id="hoverDemoSect"></div>
                                  </div>
            
            
            
            `;
            }else{
                parentDropArea.innerHTML += `
                <div class="form-box field-card" id="imageFieldEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="previewData">
                <div class="form-box imageUpload">
            
                <input type="file" accept="image/*" name="upload" value="Upload Image" id="setFile"
                    onchange="PlaceHolderImage(event)" />
            </div>
                <label id="insertedLabel" class="d-flex">${obj[i].label}<sup id="prevYesNo" style="display:none"
                class="prevDat">*</sup>
            <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                    to add Document </span></i> </label>
                    <img id="insertedImage"  src="` +
                    obj[i].imgSRC +
    
                    ` alt="Submit" width="200"">
                
                                        </div>
                                        <div class="hover-space" id="hoverDemoSect"></div>
                                      </div>
                
                
                
                `;
            }
            try {

                if (obj[i].required == true) {
                    parentDropArea
                        .querySelector("#imageFieldEle")
                        .querySelector("input").required = "required";
                }
                parentDropArea.querySelector("#imageFieldEle").id =
                    parentDropArea.querySelector("#imageFieldEle").id +
                    previewCloneNewId;
            } catch (error) { }

        }

        else if (obj[i].id.replace(/[0-9]/g, "") == "selectBoxEle") {
            if(obj[i].required) {
            parentDropArea.innerHTML +=
                `
                <div class="form-box field-card" id="selectBoxEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="insertedData" style="flex-direction: column;">
                <label class="d-flex " id="insertedLabel">` +
                obj[i].label +
                ` <sup id="prevYesNo"  >*</sup> <i class="Questionicons f-left">
                <span class="R-st" id="insertedTooltip">` +
                obj[i].tooltip +
                `</span></i></label>
                <select class="requiredField" id="currentInput" >
                <!-- <option id="previewRow0"></option> 
                </select>
                <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>`;}
                else{
                    parentDropArea.innerHTML +=
                    `
                    <div class="form-box field-card" id="selectBoxEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                    </div>
                    <div id="insertedData" style="flex-direction: column;">
                    <label class="d-flex " id="insertedLabel">` +
                    obj[i].label +
                    ` <sup id="prevYesNo"  style="display: none;">*</sup> <i class="Questionicons f-left">
                    <span class="R-st" id="insertedTooltip">` +
                    obj[i].tooltip +
                    `</span></i></label>
                    <select class="requiredField" id="currentInput" >
                    <!-- <option id="previewRow0"></option> 
                    </select>
                    <div class="hover-space" id="hoverDemoBot"></div>
                    <div id="topLane"></div>
                    <div id="botLane"></div>
                    </div>`;
                }

            let j = 0;
            for (var propName in obj[i].selectData) {
                document.querySelector("#currentInput").innerHTML +=
                    `<option id="previewRow` +
                    j +
                    `" value ='` +
                    obj[i].selectData[propName] +
                    `'">` +
                    propName +
                    `</option>`;
                j += 1;
            }
            document.querySelector("#currentInput").id = "insertedInput";

            parentDropArea.querySelector("#selectBoxEle").id =
                parentDropArea.querySelector("#selectBoxEle").id + previewCloneNewId;
        }
        else if (obj[i].id.replace(/[0-9]/g, "") == "radioEle") {
            if(obj[i].required) {
            parentDropArea.innerHTML +=
                `
                <div class="form-box field-card" id="radioEle">
                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                    <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                    <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                    <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                </div>

                <div id="insertedData" style="flex-direction: column;">
                <label class="d-flex " id="insertedLabel">` +
                obj[i].label +
                ` 
                <sup id="prevYesNo" >*</sup> <i class="Questionicons f-left">
                <span class="R-st" id="insertedTooltip">` +
                obj[i].tooltip +
                `</span></i></label>
                <div class="requiredField" id="currentInput" style="vertical-align: text-top; margin-right:10px;" >
                <!-- <option id="previewRow0"></option> 
                </div>

                <div class="hover-space" id="hoverDemoBot"></div>
                <div id="topLane"></div>
                <div id="botLane"></div>
                </div>`;}
                else{
                    parentDropArea.innerHTML +=
                    `
                    <div class="form-box field-card" id="radioEle">
                    <div class="hover-space" id="hoverDemoTop"></div>
                    <div class="formboxedit">
                        <a href="javascript:void(0)" class="icons settingIcon" onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                        <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                        <a href="javascript:void(0)" class="icons pasteicon"><span class="tooltiptext">Paste</span></a>
                        <a href="javascript:void(0)" class="icons copyIcon" onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                        <a href="javascript:void(0)" class="icons deleteIcon" onclick="removeCurrentDiv(event)"><span class="tooltiptext remove">Remove</span></a>
                    </div>
    
                    <div id="insertedData" style="flex-direction: column;">
                    <label class="d-flex " id="insertedLabel">` +
                    obj[i].label +
                    ` 
                    <sup id="prevYesNo"  style="display: none;">*</sup> <i class="Questionicons f-left">
                    <span class="R-st" id="insertedTooltip">` +
                    obj[i].tooltip +
                    `</span></i></label>
                    <div class="requiredField" id="currentInput" style="vertical-align: text-top; margin-right:10px;" >
                    <!-- <option id="previewRow0"></option> 
                    </div>
    
                    <div class="hover-space" id="hoverDemoBot"></div>
                    <div id="topLane"></div>
                    <div id="botLane"></div>
                    </div>`;
                }

            let j = 0;
            for (var propName in obj[i].radioData) {
                document.querySelector("#currentInput").innerHTML +=
                    `<input type=radio name='` +
                    obj[i].label +
                    `' id="radioPrevRow` +
                    j +
                    `" value ='` +
                    propName +
                    `'>` +
                    `<label>${obj[i].radioData[propName]}</label>
                    </option>`;
                j += 1;
            }
            document.querySelector("#currentInput").id = "insertedInput";

            parentDropArea.querySelector("#radioEle").id =
                parentDropArea.querySelector("#radioEle").id + previewCloneNewId;
        }
        //karthika-url

        else if (obj[i].id.replace(/[0-9]/g, "") == "urlFieldEle") {
            if(obj[i].required) {
            parentDropArea.innerHTML +=
                `<div class="form-box" id="urlFieldEle">

        <div class="hover-space" id="hoverDemoTop"></div>
        <div class="formboxedit">
            <a href="javascript:void(0)" class="icons settingIcon"
                onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
            <a href="javascript:void(0)" class="icons moveIcon"
                ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
            <a href="javascript:void(0)" class="icons pasteicon"><span
                    class="tooltiptext">Paste</span></a>
            <a href="javascript:void(0)" class="icons copyIcon"
                onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
            <a href="javascript:void(0)" class="icons deleteIcon"
                onclick="removeCurrentDiv(event)"><span
                    class="tooltiptext remove">Remove</span></a>
        </div>
        
            <label id="linkSecond" class="d-flex">` +
                obj[i].label +
                ` 
                <sup id="prevYesNo" >*</sup> <i class="Questionicons f-left">
                <span class="R-st" id="insertedTooltip">`  +

                `</span></i> </label>
            <input type="text" class="form-control requiredField" id="urlSecond"
            placeholder="${obj[i].placeholder}" required="" />
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
           `; 
            }else{
                parentDropArea.innerHTML +=
                `<div class="form-box" id="urlFieldEle">

        <div class="hover-space" id="hoverDemoTop"></div>
        <div class="formboxedit">
            <a href="javascript:void(0)" class="icons settingIcon"
                onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
            <a href="javascript:void(0)" class="icons moveIcon"
                ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
            <a href="javascript:void(0)" class="icons pasteicon"><span
                    class="tooltiptext">Paste</span></a>
            <a href="javascript:void(0)" class="icons copyIcon"
                onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
            <a href="javascript:void(0)" class="icons deleteIcon"
                onclick="removeCurrentDiv(event)"><span
                    class="tooltiptext remove">Remove</span></a>
        </div>
        
            <label id="linkSecond" class="d-flex">` +
                obj[i].label +
                ` 
                <sup id="prevYesNo" style="display:none">*</sup> <i class="Questionicons f-left">
                <span class="R-st" id="insertedTooltip">` +

                `</span></i> </label>
            <input type="text" class="form-control requiredField" id="urlSecond"
            placeholder="${obj[i].placeholder}" required="" />
                </div>
                <div class="hover-space" id="hoverDemoBot"></div>
           `; 
            }
            if (obj[i].required == true) {
                parentDropArea
                    .querySelector("#urlFieldEle")
                    .querySelector("input").required = "required";
            }
            parentDropArea.querySelector("#urlFieldEle").id =
                parentDropArea.querySelector("#urlFieldEle").id + previewCloneNewId;
        }
        //karthika-dialogue
        else if (obj[i].id.replace(/[0-9]/g, "") == "dialogueEle") {
            if(obj[i].required) {
            parentDropArea.innerHTML +=
                `<div class="previewField">
        <div class="form-box" id="dialogueEle">

            <div class="hover-space" id="hoverDemoTop"></div>
            <div class="formboxedit">
                <a href="javascript:void(0)" class="icons settingIcon"
                    onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                <a href="javascript:void(0)" class="icons moveIcon"
                    ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span
                        class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon"
                    onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                <!-- <a href="javascript:void(0)" class="icons wrenchIcon" onclick="createJSON(event)"><span class="tooltiptext">Edit JSON</span></a> -->
                <a href="javascript:void(0)" class="icons deleteIcon"
                    onclick="removeCurrentDiv(event)"><span
                        class="tooltiptext remove">Remove</span></a>
            </div>
            <label id="linkSecond" class="d-flex">`+ obj[i].label +   ` 
            <sup id="prevYesNo" >*</sup> <i class="Questionicons f-left">
            <span class="R-st" id="insertedTooltip">`+
                `</span></i> </label>
            <input type="text" class="form-control requiredField "  id="dialogueCal"
            placeholder="${obj[i].placeholder}"   readonly >
            </div>
            <div class="hover-space" id="hoverDemoBot"></div>

`;
            }
            else{
                parentDropArea.innerHTML +=
                `<div class="previewField">
        <div class="form-box" id="dialogueEle">

            <div class="hover-space" id="hoverDemoTop"></div>
            <div class="formboxedit">
                <a href="javascript:void(0)" class="icons settingIcon"
                    onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                <a href="javascript:void(0)" class="icons moveIcon"
                    ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                    <a href="javascript:void(0)" class="icons pasteicon"><span
                        class="tooltiptext">Paste</span></a>
                    <a href="javascript:void(0)" class="icons copyIcon"
                    onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                <!-- <a href="javascript:void(0)" class="icons wrenchIcon" onclick="createJSON(event)"><span class="tooltiptext">Edit JSON</span></a> -->
                <a href="javascript:void(0)" class="icons deleteIcon"
                    onclick="removeCurrentDiv(event)"><span
                        class="tooltiptext remove">Remove</span></a>
            </div>
            <label id="linkSecond" class="d-flex">`+ obj[i].label +   ` 
            <sup id="prevYesNo" style="display:none">*</sup> <i class="Questionicons f-left">
            <span class="R-st" id="insertedTooltip">`+
                `</span></i> </label>
            <input type="text" class="form-control requiredField "  id="dialogueCal"
            placeholder="${obj[i].placeholder}"   readonly >
            </div>
            <div class="hover-space" id="hoverDemoBot"></div>

`;
            }
            if (obj[i].required == true) {
                parentDropArea
                    .querySelector("#dialogueEle")
                    .querySelector("input").required = "required";
            }
            parentDropArea.querySelector("#dialogueEle").id =
                parentDropArea.querySelector("#dialogueEle").id + previewCloneNewId;
        }

        //karthika-date and time

        else if (obj[i].id.replace(/[0-9]/g, "") == "dateAndTimeEle") {
            if(obj[i].required) {
            parentDropArea.innerHTML +=
                `<div class="form-box" id="dateAndTimeEle">

        <div class="hover-space" id="hoverDemoTop"></div>
        <div class="formboxedit">
            <a href="javascript:void(0)" class="icons settingIcon"
                onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
            <a href="javascript:void(0)" class="icons moveIcon"
                ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
            <a href="javascript:void(0)" class="icons pasteicon"><span
                    class="tooltiptext">Paste</span></a>
            <a href="javascript:void(0)" class="icons copyIcon"
                onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
            <a href="javascript:void(0)" class="icons deleteIcon"
                onclick="removeCurrentDiv(event)"><span
                    class="tooltiptext remove">Remove</span></a>
        </div>
        <div id="previewData">
            <label id="dateAndTime2" class="d-flex">` +
                obj[i].label +
                ` 
                <sup id="prevYesNo">*</sup> <i class="Questionicons f-left">
                <span class="R-st" id="insertedTooltip">` +

                `</span></i> </label> <input id="dt" class="form-control requiredField"  type="datetime-local" />
        </div>
        <div class="hover-space" id="hoverDemoBot"></div>
    </div>
</div>`;
            }else{
                parentDropArea.innerHTML +=
                `<div class="form-box" id="dateAndTimeEle">

        <div class="hover-space" id="hoverDemoTop"></div>
        <div class="formboxedit">
            <a href="javascript:void(0)" class="icons settingIcon"
                onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
            <a href="javascript:void(0)" class="icons moveIcon"
                ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
            <a href="javascript:void(0)" class="icons pasteicon"><span
                    class="tooltiptext">Paste</span></a>
            <a href="javascript:void(0)" class="icons copyIcon"
                onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
            <a href="javascript:void(0)" class="icons deleteIcon"
                onclick="removeCurrentDiv(event)"><span
                    class="tooltiptext remove">Remove</span></a>
        </div>
        <div id="previewData">
            <label id="dateAndTime2" class="d-flex">` +
                obj[i].label +
                ` 
                <sup id="prevYesNo" style="display:none">*</sup> <i class="Questionicons f-left">
                <span class="R-st" id="insertedTooltip">` +

                `</span></i> </label> <input id="dt" class="form-control requiredField"  type="datetime-local" />
        </div>
        <div class="hover-space" id="hoverDemoBot"></div>
    </div>
</div>`;
            }

            if (obj[i].required == true) {
                parentDropArea
                    .querySelector("#dateAndTimeEle")
                    .querySelector("input").required = "required";
            }
            parentDropArea.querySelector("#dateAndTimeEle").id =
                parentDropArea.querySelector("#dateAndTimeEle").id + previewCloneNewId;
        }

        else if (obj[i].id.replace(/[0-9]/g, "") == "titleBoxEle") {
            if(obj[i].required) {
            parentDropArea.innerHTML +=
                `<div class="form-box checkbox" id="titleBoxEle">
        <div class="hover-space" id="hoverDemoTop"></div>
        <div class="formboxedit">
          <a href="javascript:void(0)" class="icons settingIcon"
            onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
          <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span
              class="tooltiptext">Move</span></a>
          <a href="javascript:void(0)" class="icons pasteicon"><span
              class="tooltiptext">Paste</span></a>
          <a href="javascript:void(0)" class="icons copyIcon"
            onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
          <!-- <a href="javascript:void(0)" class="icons wrenchIcon" onclick="createJSON(event)"><span class="tooltiptext">Edit JSON</span></a> -->
          <a href="javascript:void(0)" class="icons deleteIcon"
            onclick="removeCurrentDiv(event)"><span
              class="tooltiptext remove">Remove</span></a>
        </div>
        <div id="previewData" >
          <div >

        
          <h1><label id="titleBox2"
           class="d-flex" style="font-size: 20px !important;font-weight:550;">${obj[i].label}
           <sup id="prevYesNo" >*</sup>
           <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                obj[i].placeholder +
                `</span></i></label></h1>
        <input type="text" style="display: none;" class="checkbox requiredField" required />
       </div>
     </div>

     <div class="hover-space" id="hoverDemoBot"></div>
   </div>
 </div>`;
            }
            else{
                parentDropArea.innerHTML +=
                `<div class="form-box checkbox" id="titleBoxEle">
        <div class="hover-space" id="hoverDemoTop"></div>
        <div class="formboxedit">
          <a href="javascript:void(0)" class="icons settingIcon"
            onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
          <a href="javascript:void(0)" class="icons moveIcon" ondrag="moveField(event)"><span
              class="tooltiptext">Move</span></a>
          <a href="javascript:void(0)" class="icons pasteicon"><span
              class="tooltiptext">Paste</span></a>
          <a href="javascript:void(0)" class="icons copyIcon"
            onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
          <!-- <a href="javascript:void(0)" class="icons wrenchIcon" onclick="createJSON(event)"><span class="tooltiptext">Edit JSON</span></a> -->
          <a href="javascript:void(0)" class="icons deleteIcon"
            onclick="removeCurrentDiv(event)"><span
              class="tooltiptext remove">Remove</span></a>
        </div>
        <div id="previewData" >
          <div >

        
          <h1><label id="titleBox2"
           class="d-flex" style="font-size: 20px !important;font-weight:550;">${obj[i].label}
           <sup id="prevYesNo"  style="display: none;">*</sup>
           <i class="Questionicons f-left"><span class="R-st" id="insertedTooltip">` +
                obj[i].placeholder +
                `</span></i></label></h1>
        <input type="text" style="display: none;" class="checkbox requiredField" required />
       </div>
     </div>

     <div class="hover-space" id="hoverDemoBot"></div>
   </div>
 </div>`;


            }
            if (obj[i].required == true) {
                parentDropArea
                    .querySelector("#titleBoxEle");
                required = "required";
            }
            parentDropArea.querySelector("#titleBoxEle").id =
                parentDropArea.querySelector("#titleBoxEle").id + previewCloneNewId;
        }
      

        //karthika-video
        else if (obj[i].id.replace(/[0-9]/g, "") == "videoembedEle") {
            if(obj[i].required) {

            parentDropArea.innerHTML += `                <div class="form-box" id="videoembedEle">
            <div class="hover-space" id="hoverDemoTop"></div>
            <div class="formboxedit">
                <a href="javascript:void(0)" class="icons settingIcon"
                    onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                <a href="javascript:void(0)" class="icons moveIcon"
                    ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                <a href="javascript:void(0)" class="icons pasteicon"><span
                        class="tooltiptext">Paste</span></a>
                <a href="javascript:void(0)" class="icons copyIcon"
                    onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                <a href="javascript:void(0)" class="icons deleteIcon"
                    onclick="removeCurrentDiv(event)"><span
                        class="tooltiptext remove">Remove</span></a>
            </div>
            <div id="previewData">
            <label id="insertedLabel" class="d-flex">${obj[i].label}<sup id="prevYesNo"  
            class="prevDat">*</sup>
        <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                to add Document </span></i> </label>
                <iframe id="insertedInput" class="videoSet" src="`+
                obj[i].videoSRC
                + `"  >
                </iframe>

                </div>
                <div class="hover-space" id="hoverDemoSect"></div>
              </div>


            
            `;
            }else{
                
            parentDropArea.innerHTML += `                <div class="form-box" id="videoembedEle">
            <div class="hover-space" id="hoverDemoTop"></div>
            <div class="formboxedit">
                <a href="javascript:void(0)" class="icons settingIcon"
                    onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                <a href="javascript:void(0)" class="icons moveIcon"
                    ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                <a href="javascript:void(0)" class="icons pasteicon"><span
                        class="tooltiptext">Paste</span></a>
                <a href="javascript:void(0)" class="icons copyIcon"
                    onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                <a href="javascript:void(0)" class="icons deleteIcon"
                    onclick="removeCurrentDiv(event)"><span
                        class="tooltiptext remove">Remove</span></a>
            </div>
            <div id="previewData">
            <label id="insertedLabel" class="d-flex">${obj[i].label}<sup id="prevYesNo"  style="display: none;"
            class="prevDat">*</sup>
        <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                to add Document </span></i> </label>
                <iframe id="insertedInput" class="videoSet" src="`+
                obj[i].videoSRC
                + `"  >
                </iframe>

                </div>
                <div class="hover-space" id="hoverDemoSect"></div>
              </div>


            
            `;
            }
            if (obj[i].required == true) {
                parentDropArea
                    .querySelector("#videoembedEle");
                required = "required";
            }
            parentDropArea.querySelector("#videoembedEle").id =
                parentDropArea.querySelector("#videoembedEle").id + previewCloneNewId;

        }
        //karthika-table
        else if (obj[i].id.replace(/[0-9]/g, "") == "tableEle") {
            if(obj[i].required) {
            parentDropArea.innerHTML +=
                `
            <div class="form-box" id="tableEle"> 
            <div class="hover-space" id="hoverDemoTop"></div> 
            <div class="formboxedit">
            <a href="javascript:void(0)" class="icons settingIcon"
                onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
            <a href="javascript:void(0)" class="icons moveIcon"
                ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
            <a href="javascript:void(0)" class="icons pasteicon"><span
                    class="tooltiptext">Paste</span></a>
            <a href="javascript:void(0)" class="icons copyIcon"
                onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
            <a href="javascript:void(0)" class="icons deleteIcon"
                onclick="removeCurrentDiv(event)"><span
                    class="tooltiptext remove">Remove</span></a>
        </div>
        <div id="previewData">
        <label id="insertedLable" class="d-flex">${obj[i].label}
        <sup id="prevYesNo"  
        class="prevDat">*</sup>
    <i class="Questionicons f-left"><span class=R-st" id="tooltipSecond">Help
            to add Document </span></i> </label>
            <samp id="insertedInput" class="tableStyle" accept="">${obj[i].table}</samp>
            </div>
            <div class="hover-space" id="hoverDemoSect"></div>
    
        </div>
            `;}
            else{
                parentDropArea.innerHTML +=
                `
            <div class="form-box" id="tableEle"> 
            <div class="hover-space" id="hoverDemoTop"></div> 
            <div class="formboxedit">
            <a href="javascript:void(0)" class="icons settingIcon"
                onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
            <a href="javascript:void(0)" class="icons moveIcon"
                ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
            <a href="javascript:void(0)" class="icons pasteicon"><span
                    class="tooltiptext">Paste</span></a>
            <a href="javascript:void(0)" class="icons copyIcon"
                onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
            <a href="javascript:void(0)" class="icons deleteIcon"
                onclick="removeCurrentDiv(event)"><span
                    class="tooltiptext remove">Remove</span></a>
        </div>
        <div id="previewData">
        <label id="insertedLable" class="d-flex">${obj[i].label}
        <sup id="prevYesNo"  style="display: none;"
        class="prevDat">*</sup>
    <i class="Questionicons f-left"><span class=R-st" id="tooltipSecond">Help
            to add Document </span></i> </label>
            <samp id="insertedInput" class="tableStyle" accept="">${obj[i].table}</samp>
            </div>
            <div class="hover-space" id="hoverDemoSect"></div>
    
        </div>
            `;
            }
            if (obj[i].required == true) {
                parentDropArea
                    .querySelector("#tableEle");
                required = "required";
            }
            parentDropArea.querySelector("#tableEle").id =
                parentDropArea.querySelector("#tableEle").id + previewCloneNewId;

        }


        //karthika-signature
        else if (obj[i].id.replace(/[0-9]/g, "") == "signatureEle") {
            if(obj[i].required) {
            parentDropArea.innerHTML +=

                `
            <div class="form-box" id="signatureEle">  
            <div class="hover-space" id="hoverDemoTop"></div>
            <div class="formboxedit">
            <a href="javascript:void(0)" class="icons settingIcon"
                onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
            <a href="javascript:void(0)" class="icons moveIcon"
                ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
            <a href="javascript:void(0)" class="icons pasteicon"><span
                    class="tooltiptext">Paste</span></a>
            <a href="javascript:void(0)" class="icons copyIcon"
                onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
            <a href="javascript:void(0)" class="icons deleteIcon"
                onclick="removeCurrentDiv(event)"><span
                    class="tooltiptext remove">Remove</span></a>
        </div>

        <div id="previewData">
        <label id="signBox2" class="d-flex">${obj[i].label}<sup id="prevYesNo" 
        class="prevDat">*</sup>
    <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
            to add Document </span></i> </label>

            <div class="row">
            <div class="col-md-12">
              <canvas id="sig-canvas" width="220" height="60">
                Get a better browser, bro.
              </canvas></div>

              <div class="row">
              <div class="col-md-12">
                <button class="btn btn-primary" id="sig-submitBtn" style="padding: 5px 10px">Submit Signature </button>
                <button class="btn btn-default" id="sig-clearBtn" style="padding: 5px 10px"> Clear Signature </button>
              </div>
            </div>
            <br />
            <div class="row">
            <div class="col-md-12">
              <input type="text" id="sig-dataUrl" style="display: none"  class="form-control" rows="5"/>
            </div>
          </div>
          <br />
          <div class="row" style="display:none">
          <div class="col-md-12">
          id="sig-image" 
          class="requiredField"
          src="` +
          obj[i].imgSRC +

          ` alt="Your signature will go here!""
          >

          </div>
          </div>

        </div>


             <div class="hover-space" id="hoverDemoSect"></div>

           </div>

            
            `;
            }else{
                parentDropArea.innerHTML +=

                `
            <div class="form-box" id="signatureEle">  
            <div class="hover-space" id="hoverDemoTop"></div>
            <div class="formboxedit">
            <a href="javascript:void(0)" class="icons settingIcon"
                onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
            <a href="javascript:void(0)" class="icons moveIcon"
                ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
            <a href="javascript:void(0)" class="icons pasteicon"><span
                    class="tooltiptext">Paste</span></a>
            <a href="javascript:void(0)" class="icons copyIcon"
                onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
            <a href="javascript:void(0)" class="icons deleteIcon"
                onclick="removeCurrentDiv(event)"><span
                    class="tooltiptext remove">Remove</span></a>
        </div>

        <div id="previewData">
        <label id="signBox2" class="d-flex">${obj[i].label}<sup id="prevYesNo"  style="display: none;"
        class="prevDat">*</sup>
    <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
            to add Document </span></i> </label>

            <div class="row">
            <div class="col-md-12">
              <canvas id="sig-canvas" width="220" height="60">
                Get a better browser, bro.
              </canvas></div>

              <div class="row">
              <div class="col-md-12">
                <button class="btn btn-primary" id="sig-submitBtn" style="padding: 5px 10px">Submit Signature </button>
                <button class="btn btn-default" id="sig-clearBtn" style="padding: 5px 10px"> Clear Signature </button>
              </div>
            </div>
            <br />
            <div class="row">
            <div class="col-md-12">
              <input type="text" id="sig-dataUrl" style="display: none"  class="form-control" rows="5"/>
            </div>
          </div>
          <br />
          <div class="row" style="display:none">
          <div class="col-md-12">
          id="sig-image" 
          class="requiredField"
          src="` +
          obj[i].imgSRC +

          ` alt="Your signature will go here!""
          >

          </div>
          </div>

        </div>


             <div class="hover-space" id="hoverDemoSect"></div>

           </div>

            
            `;

            }
            try {

                if (obj[i].required == true) {
                    parentDropArea
                        .querySelector("#signatureEle")
                        .querySelector("input").required = "required";
                }
                parentDropArea.querySelector("#signatureEle").id =
                    parentDropArea.querySelector("#signatureEle").id +
                    previewCloneNewId;
            } catch (error) { }

        }

        else if (obj[i].id.replace(/[0-9]/g, "") == "documentEle") {
            if(obj[i].required) {
            parentDropArea.innerHTML += `<div class="form-box checkbox" id="documentEle">


        <div class="hover-space" id="hoverDemoTop"></div>
        <div class="formboxedit">
          <a href="javascript:void(0)" class="icons settingIcon"
            onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
          <a href="javascript:void(0)" class="icons moveIcon"
            ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
          <a href="javascript:void(0)" class="icons copyIcon"
            onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
          <!-- <a href="javascript:void(0)" class="icons wrenchIcon" onclick="createJSON(event)"><span class="tooltiptext">Edit JSON</span></a> -->
          <a href="javascript:void(0)" class="icons deleteIcon"
          onclick="removeCurrentDiv(event)"><span
              class="tooltiptext remove">Remove</span></a>
        </div>
        <div id="previewData">
        <label id="insertedLabel" class="d-flex">${obj[i].label}<sup id="prevYesNo"  
        class="prevDat">*</sup>
    <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
            to add Document </span></i> </label>
        <input type="file" class="btn primaryBtn document" id="insertedInput" accept="${obj[i].documentType}" onchange="openFile(event)">
        <!-- <button onclick="doupload()" name="submit">Upload File</button> -->
      </div>
        <div class="hover-space" id="hoverDemoSect"></div>
      </div>`;


            }
            else{
                parentDropArea.innerHTML += `<div class="form-box checkbox" id="documentEle">


                <div class="hover-space" id="hoverDemoTop"></div>
                <div class="formboxedit">
                  <a href="javascript:void(0)" class="icons settingIcon"
                    onclick="editField(event)"><span class="tooltiptext">Edit</span></a>
                  <a href="javascript:void(0)" class="icons moveIcon"
                    ondrag="moveField(event)"><span class="tooltiptext">Move</span></a>
                  <a href="javascript:void(0)" class="icons copyIcon"
                    onclick="copyCurrentDiv(event)"><span class="tooltiptext">Copy</span></a>
                  <!-- <a href="javascript:void(0)" class="icons wrenchIcon" onclick="createJSON(event)"><span class="tooltiptext">Edit JSON</span></a> -->
                  <a href="javascript:void(0)" class="icons deleteIcon"
                  onclick="removeCurrentDiv(event)"><span
                      class="tooltiptext remove">Remove</span></a>
                </div>
                <div id="previewData">
                <label id="insertedLabel" class="d-flex">${obj[i].label}<sup id="prevYesNo"  style="display: none;"
                class="prevDat">*</sup>
            <i class="Questionicons f-left"><span class="R-st" id="tooltipSecond">Help
                    to add Document </span></i> </label>
                <input type="file" class="btn primaryBtn document" id="insertedInput" accept="${obj[i].documentType}" onchange="openFile(event)">
                <!-- <button onclick="doupload()" name="submit">Upload File</button> -->
              </div>
                <div class="hover-space" id="hoverDemoSect"></div>
              </div>`;
            }
        }
    }
    clean(document);
    // };

}