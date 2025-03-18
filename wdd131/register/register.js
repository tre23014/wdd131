function participantTemplate(count) {
    return `<section class="participant${count}">
                <p>Participant ${count}</p>
                <div class="item">
                    <label for="fname${count}"> First Name<span>*</span></label>
                    <input id="fname" type="text${count}" name="fname${count}" value="" required />
                </div>
                <div class="item activities">
                    <label for="activity${count}">Activity #<span>*</span></label>
                    <input id="activity" type="text${count}" name="activity${count}" />
                </div>
                <div class="item">
                    <label for="fee${count}">Fee ($)<span>*</span></label>
                    <input id="fee${count}" type="number" name="fee${count}" />
                </div>
                <div class="item">
                    <label for="date${count}">Desired Date <span>*</span></label>
                    <input id="date${count}" type="date" name="date${count}" />
                </div>
                <div class="item">
                    <label for="grade${count}">Grade</label>
                    <select class="minimal" id="grade${count}">
                        <option selected value="" disabled selected></option>
                        <option value="1">1st</option>
                        <option value="2">2nd</option>
                        <option value="3">3rd</option>
                        <option value="4">4th</option>
                        <option value="5">5th</option>
                        <option value="6">6th</option>
                        <option value="7">7th</option>
                        <option value="8">8th</option>
                        <option value="9">9th</option>
                        <option value="10">10th</option>
                        <option value="11">11th</option>
                        <option value="12">12th</option>
                    </select>
                </div>
            </section>`
}

function addParticipant() {
    participantCount++;

    document.querySelector("#add").insertAdjacentHTML("#beforebegin", participantTemplate(participantCount));
}

function successTemplate(info) {
    return `<h2>Camp registration summary</h2>
            <p>Adult: ${info.adultName}</p>
            <p>Number of Participants: ${info.totalParticipants}</p>
            <p>Total Cost: $ ${info.totalFees}</p>`;
}

function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    let total = 0;
    feeElements.forEach((element) => {
        total += parseFloat(element.value);
    });

    // once you have your total make sure to return it!
    return {
        totalFees: total,
        totalParticipants: feeElements.length,
    };
}

function submitForm(event) {
    event.preventDefault();
    // do the rest of the stuff

    document.querySelector("form").checkValidity();

    if (document.querySelector("form").checkValidity()) {

        totalDetails = totalFees();

        const formInfo = {
            totalFees: totalDetails.totalFees,
            totalParticipants: totalDetails.totalParticipants,
            adultName: document.querySelector("#adult_name").value,
        };

        summaryHTML = successTemplate(formInfo);
        summaryElement = document.querySelector("#summary");
        summaryElement.innerHTML = summaryHTML;
        summaryElement.style.display = "block";
    }
}

let participantCount = 1;

document.querySelector("#add").addEventListener("click", addParticipant);

document.querySelector("#submitButton").addEventListener("click", submitForm);
