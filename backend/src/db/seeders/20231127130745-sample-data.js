const db = require('../models');
const Users = db.users;

const Images = db.images;

const Tenants = db.tenants;

const Organizations = db.organizations;

const ImagesData = [
  {
    prompt: 'A futuristic cityscape',

    // type code here for "images" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    prompt: 'A serene mountain landscape',

    // type code here for "images" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    prompt: 'A bustling market scene',

    // type code here for "images" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    prompt: 'A tranquil beach at sunset',

    // type code here for "images" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    prompt: 'A magical forest',

    // type code here for "images" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const TenantsData = [
  {
    name: 'Tenant One',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Tenant Two',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Tenant Three',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Tenant Four',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Tenant Five',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },
];

const OrganizationsData = [
  {
    name: 'Heike Kamerlingh Onnes',
  },

  {
    name: 'Alfred Binet',
  },

  {
    name: 'Charles Lyell',
  },

  {
    name: 'Neils Bohr',
  },

  {
    name: 'Justus Liebig',
  },
];

// Similar logic for "relation_many"

async function associateUserWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User0 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (User0?.setOrganization) {
    await User0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User1 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (User1?.setOrganization) {
    await User1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User2 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (User2?.setOrganization) {
    await User2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User3 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (User3?.setOrganization) {
    await User3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User4 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (User4?.setOrganization) {
    await User4.setOrganization(relatedOrganization4);
  }
}

async function associateImageWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Image0 = await Images.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Image0?.setUser) {
    await Image0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Image1 = await Images.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Image1?.setUser) {
    await Image1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Image2 = await Images.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Image2?.setUser) {
    await Image2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Image3 = await Images.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Image3?.setUser) {
    await Image3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Image4 = await Images.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Image4?.setUser) {
    await Image4.setUser(relatedUser4);
  }
}

async function associateImageWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Image0 = await Images.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Image0?.setOrganization) {
    await Image0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Image1 = await Images.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Image1?.setOrganization) {
    await Image1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Image2 = await Images.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Image2?.setOrganization) {
    await Image2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Image3 = await Images.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Image3?.setOrganization) {
    await Image3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Image4 = await Images.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Image4?.setOrganization) {
    await Image4.setOrganization(relatedOrganization4);
  }
}

// Similar logic for "relation_many"

async function associateTenantWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Tenant0 = await Tenants.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Tenant0?.setOrganization) {
    await Tenant0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Tenant1 = await Tenants.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Tenant1?.setOrganization) {
    await Tenant1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Tenant2 = await Tenants.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Tenant2?.setOrganization) {
    await Tenant2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Tenant3 = await Tenants.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Tenant3?.setOrganization) {
    await Tenant3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Tenant4 = await Tenants.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Tenant4?.setOrganization) {
    await Tenant4.setOrganization(relatedOrganization4);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Images.bulkCreate(ImagesData);

    await Tenants.bulkCreate(TenantsData);

    await Organizations.bulkCreate(OrganizationsData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateUserWithOrganization(),

      await associateImageWithUser(),

      await associateImageWithOrganization(),

      // Similar logic for "relation_many"

      await associateTenantWithOrganization(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('images', null, {});

    await queryInterface.bulkDelete('tenants', null, {});

    await queryInterface.bulkDelete('organizations', null, {});
  },
};
