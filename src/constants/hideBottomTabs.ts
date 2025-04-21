export const hideBottomTabsWebView = `
    (function() {
        const elements = document.querySelectorAll('.relative.flex.items-center.justify-between.bg-white.rounded-r-20.gap-3.p-5.pb-2.border.border-t-f2f2f2.border-l-f2f2f2.border-r-f2f2f2');
        elements.forEach(element => {
            element.style.display = 'none';
        });
    })();
`;
