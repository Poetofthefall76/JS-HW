const light = prompt('something')

switch (light) {
    case 'Green':
        console.log('Go!!!')
        break;

    case 'Red':
        console.log('Stop')
        break;

    case 'Yellow':
        console.log('Attention')
        break;

    default:
        console.log('Color is not found')
        break;
}