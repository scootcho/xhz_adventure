# Be sure to restart your server when you modify this file.

# Your secret key for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!
# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.

XhzAdventure::Application.config.secret_token = if Rails.env.development? or Rails.env.test?
  'cd7ca4956cc9e5ab8c50b9139fcd5380de5ed52aed4077174b9a23028fdf541968713330bcb110797fc705091f1efcf3fa1096e37bb0365b9fe28b91ba5c5e31'
else
  ENV['SECRET_TOKEN']
end
