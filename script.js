function showTab(tabName) {
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    var selectedTab = document.getElementById(tabName);
    selectedTab.style.display = 'block';

    if (tabName !== 'welcome') {
        var welcomeTab = document.getElementById('welcome');
        welcomeTab.style.display = 'none';
    }
}