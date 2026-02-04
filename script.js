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
    categoryGrid.classList.add('hidden');
    mainHeader.classList.add('hidden');
    backNav.style.display = 'block';
    detailView.style.display = 'block';
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

// Create Contact Card HTML
function createContactCard(contact) {
    return `
        <a href="tel:${contact.phone}" class="contact-card">
            <div class="contact-info">
                <h3>${contact.name}</h3>
                <span>${contact.phone}</span>
            </div>
            <div class="call-icon">
                <svg viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1.01A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 15.12 15.12 0 0 0 16 16c.55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
        </a>
    `;
}

// Go Back
function goBack() {
    detailView.style.display = 'none';
    backNav.style.display = 'none';
    categoryGrid.classList.remove('hidden');
    mainHeader.classList.remove('hidden');
}

backBtn.addEventListener('click', goBack);

// Initialize
renderCategories();
