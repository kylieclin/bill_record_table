export function formatDate(datetime) {
    let d = new Date(datetime);
    let date = d.toLocaleString().split(',')[0];
    return date;
}