import _ from 'lodash';

const mahasiswa = [
    {nama: 'Salim', email: 'salim@gmail.com', jurursan: 'fisika'},
    {nama: 'Feyzar', email: 'feyzar@gmail.com', jurursan: 'fisika'},
    {nama: 'RIan', email: 'rian@gmail.com', jurursan: 'fisika'},
];

const mhs = _.find(mahasiswa, {nama: 'Salim'});

console.log(mhs);