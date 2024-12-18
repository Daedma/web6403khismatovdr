document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('suggestion-form');
	const placeName = document.getElementById('place-name');
	const description = document.getElementById('description');
	const season = document.getElementById('season');
	const formError = document.getElementById('form-error');

	const russianRegex = /^[а-яА-ЯёЁ\s.,?!;:()"'0-9-]*$/;

	function validateField(field) {
		if (!russianRegex.test(field.value)) {
			field.classList.add('invalid');
			return false;
		} else {
			field.classList.remove('invalid');
			return true;
		}
	}

	function updateFormError() {
		isValid = validateField(placeName);
		isValid &&= validateField(description);
		isValid &&= validateField(season);
		if (!isValid) {
			formError.textContent = 'Пожалуйста, используйте только русские буквы и знаки препинания.';
		}
		else {
			formError.textContent = '';
		}
	}

	placeName.addEventListener('input', updateFormError);

	description.addEventListener('input', updateFormError);

	season.addEventListener('input', updateFormError);

	form.addEventListener('submit', function(event) {
		if (!validateField(placeName) || !validateField(description) || !validateField(season)) {
			formError.textContent = 'Пожалуйста, используйте только русские буквы и знаки препинания.';
			event.preventDefault();
		} else {
			formError.textContent = '';
		}
	});
});