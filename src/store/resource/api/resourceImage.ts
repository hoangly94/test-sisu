
export default {
  query: (formData: any) => ({
    url: `/upload`,
    method: 'POST',
    body: formData,
  }),
}