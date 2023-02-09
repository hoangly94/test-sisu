window.createCKEditor = () => {
    return ClassicEditor
        .create(document.querySelector('#editor'), {
            codeBlock: {
                languages: [
                    { language: 'javascript', label: 'tsx' },
                    { language: 'python', label: 'Python' }
                ]
            }
        })
        .catch(error => {
            console.error(error);
        });
}
