const form = document.querySelector('#upload-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const fileInput = document.querySelector('#file-input');
  const providerSelect = document.querySelector('#provider-select');
  const provider = providerSelect.value;

  const formData = new FormData();
  formData.append('file', fileInput.files[0]);

  try {
    const response = await fetch(`/api/${provider}/upload`, {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      alert('File uploaded successfully');
    } else {
      const errorText = await response.text();
      throw new Error(errorText);
    }
  } catch (err) {
    console.error(err);
    alert('Upload failed');
  }
});
