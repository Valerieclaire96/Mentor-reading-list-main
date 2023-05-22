"""empty message

Revision ID: d4f5020f52a3
Revises: 43e86e45a097
Create Date: 2023-05-21 19:57:00.683821

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd4f5020f52a3'
down_revision = '43e86e45a097'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('bending__types', schema=None) as batch_op:
        batch_op.alter_column('abilities',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=180),
               existing_nullable=False)

    with op.batch_alter_table('cities', schema=None) as batch_op:
        batch_op.alter_column('leader',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=180),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('cities', schema=None) as batch_op:
        batch_op.alter_column('leader',
               existing_type=sa.String(length=180),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)

    with op.batch_alter_table('bending__types', schema=None) as batch_op:
        batch_op.alter_column('abilities',
               existing_type=sa.String(length=180),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)

    # ### end Alembic commands ###
