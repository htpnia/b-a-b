const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Verifique se o caminho está correto

const Transacao = sequelize.define('Transacao', {
    idTransacao: { // Nome mais adequado para o atributo no modelo Sequelize
        type: DataTypes.INTEGER,
        primaryKey: true, // Explicitamente definindo como chave primária
        autoIncrement: true, // Especifica que esta coluna é auto-incremental
        field: 'id_transacao' // Mapeia este campo para a coluna 'id_transacao' no banco de dados
    },
    nomeTransacao: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        field: 'nome_transacao' // Mapeia para a coluna 'nome_transacao' no banco de dados
    },
    descricao: {
        type: DataTypes.STRING(255),
        allowNull: true, // Permitir nulo
        field: 'descricao_transacao' // Mapeia para a coluna 'descricao' no banco de dados
    }
}, {
    tableName: 'transacao',
    timestamps: false // Desabilita os campos createdAt e updatedAt
});

module.exports = Transacao;
