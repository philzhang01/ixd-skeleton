var button_my_button = "#calculatebtn";

$(button_my_button).click(function(e) {
  e.preventDefault();
  let gender = $("input[name=gender]:checked").val();
  let age = $("#inputAge").val();
  let weight = $("#inputWeight").val();
  let height = $("#inputHeight").val();

  let BMR = 0;

  //console.log(age, weight, height);

  if (age !== "" && weight !== "" && height !== "") {
    if (gender === "male") {
      BMR = 66.47 + 6.24 * weight + 12.7 * height - 6.755 * age;
    } else {
      BMR = 655.1 + 4.35 * weight + 4.7 * height - 4.7 * age;
    }

    $("#BMRresult").text("");
    $("#BMRresult").append(`<div>Your BMR is ${Math.trunc(BMR)}</div>`);
  } else {
    $("#BMRresult").text("");
    $("#BMRresult").append(`Sorry! Missing input value!`);
  }
});

$("#confirmBtn").click(function() {
  let arr = $("#BMRresult")
    .text()
    .split(" ");
  let BMR = Number(arr[arr.length - 1]);
  let target = 0;
  let plan = $("input[name=goal]:checked").val();
  if (plan === "maintain") target = BMR;
  else if (plan === "lose") target = Math.floor(BMR * 0.8);
  else target = Math.floor(BMR * 1.2);

  if ($("input[name=goal]:checked").length === 1) {
    $("#planresult").text("");
    $("#planresult").append(
      `<div>Customized plan has been successfully created! To achieve your goal, 
      your daily caloric intake should be ${target} kCal</div>`
    );
  } else {
    $("#planresult").text("");
    $("#planresult").append(`Please select your goal!`);
  }

  $.post("/confirm", { plan, target });
});

$(".submitBtnAlt").click(function(e) {
  e.preventDefault();
  let day = $(this).attr("day");
  $.post("/updatefoodAlt", {
    day,
    breakfast: $(`input[name=breakfast${day}]`).val(),
    lunch: $(`input[name=lunch${day}]`).val(),
    dinner: $(`input[name=dinner${day}]`).val()
  });
});
