const projectIds = ['CND', 'TCC', 'CU'];
const groupName = 'abt-employees';

function findElementWithText(node) {

	if (node.nodeType === Node.TEXT_NODE) {
		const textContent = node.textContent.trim();

		if (textContent === groupName) {
			return node.parentNode;
		}
	}

	for (const childNode of node.childNodes) {
		const result = findElementWithText(childNode);

		if (result) {
			return result;
		}
	}

	return null;
}

function handleInputFocus(event) {
	const input = event.target;

	if (input.placeholder === 'Add a comment…' || input.placeholder === '• You have an unsaved comment') {
		const projectId = projectIds.find(id =>
			(window.location.href.includes('selectedIssue=' + id) || window.location.href.includes('browse/' + id)));

		if (!projectId) {
			return;
		}

		//set timeout to wait for 1 second
		setTimeout(function () {
			const button = document.querySelector('[data-testid="issue-comment-base.ui.comment.comment-visibility.comment-visibility-wrapper"] button');

			if (button) {
				button.click();
				const container = document.querySelector('.comment-visibility__menu-list');
				const elementWithText = findElementWithText(container);
				if (elementWithText) {
					elementWithText.click();
				}
			}
		}, 250);
	}
}

document.addEventListener('focus', handleInputFocus, true);
