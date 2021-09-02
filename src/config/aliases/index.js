const aliases = (prefix = `src`) => ({
    '@atoms': `${prefix}/components/atoms`,
    '@molecules': `${prefix}/components/molecules`,
    '@organisms': `${prefix}/components/organisms`,
    '@templates': `${prefix}/components/templates`,
    '@components': `${prefix}/components`,
    '@config': `${prefix}/config`,
    '@helpers': `${prefix}/helpers`,
});

module.exports = aliases;
