import { categories } from './data.js';

const categoryGrid = document.getElementById('categoryGrid');
const detailView = document.getElementById('detailView');
const backNav = document.getElementById('backNav');
const mainHeader = document.getElementById('mainHeader');
const backBtn = document.getElementById('backBtn');

// Render Categories
function renderCategories() {
    categoryGrid.innerHTML = '';
    categories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <div class="icon">${category.icon}</div>
            <div class="category-name">${category.name}</div>
        `;
        card.addEventListener('click', () => showCategory(category));
        categoryGrid.appendChild(card);
    });
}

// Show Category Detail
function showCategory(category) {
    history.pushState({ view: 'detail', category: category.name }, '', '#detail');
    updateView();
    renderCategoryDetail(category);
}

// Render Category Detail Content
function renderCategoryDetail(category) {
    window.scrollTo(0, 0);

    let content = `
        <div style="text-align:center; margin-bottom: 2rem;">
            <div class="icon">${category.icon}</div>
            <h2>${category.name}</h2>
        </div>
    `;

    // Manager
    if (category.manager) {
        content += `<div class="section-title">Manager</div>`;
        content += createContactCard(category.manager);
    }

    // Team Leaders
    if (category.team_leaders && category.team_leaders.length > 0) {
        content += `<div class="section-title">Team Leaders</div>`;
        category.team_leaders.forEach(contact => {
            content += createContactCard(contact);
        });
    }

    // Polyvalents
    if (category.polyvalents && category.polyvalents.length > 0) {
        content += `<div class="section-title">Polyvalents</div>`;
        category.polyvalents.forEach(contact => {
            content += createContactCard(contact);
        });
    }

    detailView.innerHTML = content;
}

// Update View based on state
function updateView() {
    categoryGrid.classList.add('hidden');
    mainHeader.classList.add('hidden');
    backNav.style.display = 'block';
    detailView.style.display = 'block';
}

// Reset View to Home
function resetView() {
    detailView.style.display = 'none';
    backNav.style.display = 'none';
    categoryGrid.classList.remove('hidden');
    mainHeader.classList.remove('hidden');
}

// Go Back
function goBack() {
    history.back();
}

// Handle Browser Back Button
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.view === 'detail') {
        // Should usually be handled by pushState, but if navigating forward
        const category = categories.find(c => c.name === event.state.category);
        if (category) {
            updateView();
            renderCategoryDetail(category);
        }
    } else {
        resetView();
    }
});

backBtn.addEventListener('click', goBack);

// Initialize
renderCategories();
