function participantTemplate(count) {
    return `<fieldset class="participants">
                <legend>Participant Information</legend>
                <section class="participant${count}">
                    <p>Participant ${count}</p>
                    <div class="item${count}">
                        <label for="fname${count}"> First Name<span>*</span></label>
                        <input id="fname" type="text${count}" name="fname${count}" value="" required />
                    </div>
                    <div class="item activities${count}">
                        <label for="activity${count}">Activity #<span>*</span></label>
                        <input id="activity" type="text${count}" name="activity${count}" />
                    </div>
                    <div class="item${count}">
                        <label for="fee${count}">Fee ($)<span>*</span></label>
                        <input id="fee${count}" type="number" name="fee${count}" />
                    </div>
                    <div class="item${count}">
                        <label for="date${count}">Desired Date <span>*</span></label>
                        <input id="date${count}" type="date" name="date${count}" />
                    </div>
                    <div class="item${count}">
                        <p>Grade</p>
                        <select>
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
                </section>
                <button type="button" id="add">Add Participant</button>
            </fieldset>
                `
}

function insertAdjacentHTML() {
    const addParticipantButton = document.getElementById("#add");
    const participantsFieldset = document.getElementById("#participants");

    let count = 1;

    addParticipantButton.addEventListener("click", function () {
        count++;

        const newParticipantHTML = participantTemplate(count);

        addParticipantButton.insertAdjacentHTML("beforebegin", newParticipantHTML);
    });
}

function submitForm(event) {
    event.preventDefault();
    // do the rest of the stuff
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

    // once you have your total make sure to return it!

}

document.querySelector("#add").addEventListener("click", function () {
    insertAdjacentHTML();
});
